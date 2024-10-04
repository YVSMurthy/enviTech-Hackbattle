import cv2
import socket
from ultralytics import YOLO

# YOLO model
model = YOLO('yolov8n.pt')

# Set up TCP socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('0.0.0.0', 8080))
server_socket.listen(1)

print("Server listening on port 8080...")

while True:
    try:
        # Wait for a client connection
        client_socket, addr = server_socket.accept()
        print(f"Connection from {addr}")

        # Open the camera
        cap = cv2.VideoCapture(0)

        while cap.isOpened():
            ret, frame = cap.read()

            if ret:
                # Perform inference
                results = model(frame)

                # Check if any humans are detected
                human_detected = False
                for result in results:
                    # Check if the label "person" exists in the results
                    if result.boxes is not None:  # Ensure that boxes are detected
                        for box in result.boxes:
                            if box.cls == 0:  # Assuming '0' corresponds to 'person'
                                human_detected = True
                                break

                    if human_detected:
                        break

                # Try to send detection result to the client
                try:
                    if human_detected:
                        client_socket.sendall(b'human_detected')
                    else:
                        client_socket.sendall(b'no_human')

                except (BrokenPipeError, ConnectionResetError):
                    print(f"Client {addr} disconnected unexpectedly.")
                    break  # Exit the inner loop if client disconnects

                # Allow user to stop the detection by pressing 'q'
                if cv2.waitKey(1) & 0xFF == ord('q'):
                    print("Stopping image detection...")
                    break
            else:
                print("Failed to capture video")
                break

        # Release camera and close client socket when the connection is broken or 'q' is pressed
        cap.release()
        client_socket.close()
        print("Camera stopped, waiting for a new connection...")

    except Exception as e:
        print(f"Error: {e}")

server_socket.close()