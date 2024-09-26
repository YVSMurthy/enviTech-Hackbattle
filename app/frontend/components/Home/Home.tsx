import { useState, useEffect, useRef } from "react";
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';
import TcpSocket from 'react-native-tcp-socket';

export default function Home() {
    const [room, setRoom] = useState<string | null>(null)
    const [atHome, setAtHome] = useState<boolean>(true)
    const [day, setDay] = useState<boolean>(true)
    const [state, setState] = useState<string>('off')
    const [humanDetected, setHumanDetected] = useState<boolean>(false);
    const stateRef = useRef(state)
    const humanDetectedRef = useRef(humanDetected)

    useEffect(() => {
        stateRef.current = state;
    }, [state]);

    useEffect(() => {
        humanDetectedRef.current = humanDetected;
    }, [humanDetected]);

    useEffect(() => {
        // Setup TCP connection
        const ip = '10.0.2.2';
        const client = TcpSocket.createConnection({ port: 8080, host: ip }, () => {
            console.log('Connected to YOLO server');
        });

        // Listen for data from the YOLO server
        client.on('data', (data) => {
            const message = data.toString();

            // Always log the received data
            if (stateRef.current == 'on') {
                console.log('light on');
            }
            else {
                console.log("light off")
            }

            // Update human detection state
            if (message === 'human_detected') {
                setHumanDetected(true);
            } else if (message === 'no_human') {
                setHumanDetected(false);
            }

            // Use the ref to access the latest state values
            if (stateRef.current === 'on' && !humanDetectedRef.current) {
                setState('off'); // This should now reflect properly
            }
        });

        client.on('error', (error) => {
            console.log('Error:', error);
        });

        client.on('close', () => {
            console.log('Connection closed');
        });

        // Cleanup socket on component unmount
        return () => {
            if (client) {
                client.destroy();
                console.log('Client connection closed');
            }
        };
    }, [])
    

    return (
        <ScrollView>
            <SafeAreaView style={tw`p-5 flex flex-col gap-10`}>
                <View style={tw`flex flex-row items-center justify-between px-3 py-2`}>
                    <Text style={tw`text-3xl font-bold text-black`}>Hello, Aabhas</Text>
                    <View>
                        <Image
                            style={tw`w-16 h-16`}
                            source={require('../../assets/avatar.png')}
                        />
                    </View>
                </View>

                <View style={tw`flex flex-col gap-5`}>
                    <View style={tw`flex flex-row items-center justify-between`}>
                        <TouchableOpacity style={tw`${(day) ? 'bg-gray-200' : 'bg-gray-100'} rounded-lg w-[45%] h-30 p-5 flex items-center justify-center shadow-md`}
                            onPress={() => setDay(true)}
                        >
                            <Text style={tw`text-xl font-bold `}>Day</Text>
                            <Icon name="partly-sunny" size={20} color="#000" style={tw`mt-2`} />
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`${(!day) ? 'bg-gray-200' : 'bg-gray-100'} rounded-lg w-[45%] h-30 p-5 flex items-center justify-center shadow-md`}
                            onPress={() => setDay(false)}
                        >
                            <Text style={tw`text-xl font-bold `}>Night</Text>
                            <Icon name="moon" size={20} color="#000" style={tw`mt-2`} />
                        </TouchableOpacity>
                    </View>
                    <View style={tw`flex flex-row items-center justify-between`}>
                        <TouchableOpacity style={tw`${(!atHome) ? 'bg-gray-200' : 'bg-gray-100'} rounded-lg w-[45%] h-30 p-5 flex items-center justify-center shadow-md`}
                            onPress={() => setAtHome(false)}
                        >
                            <Text style={tw`text-xl font-bold `}>Leave Home</Text>
                            <Icon name="home" size={20} color="#000" style={tw`mt-2`} />
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`${(atHome) ? 'bg-gray-200' : 'bg-gray-100'} rounded-lg w-[45%] h-30 p-5 flex items-center justify-center shadow-md`}
                            onPress={() => setAtHome(true)}
                        >
                            <Text style={tw`text-xl font-bold `}>At Home</Text>
                            <Icon name="home" size={20} color="#000" style={tw`mt-2`} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-3xl font-bold text-black`}>Rooms</Text>
                    <View style={tw`flex flex-col gap-10`}>
                        <View style={tw`flex flex-row items-center justify-between px-2`}>
                            <TouchableOpacity style={tw`flex flex-col items-center justify-center w-40 h-35 bg-[#D5EDFF] rounded-lg mt-5 shadow-md`}
                                onPress={() => (room == 'Living') ? setRoom(null) : setRoom('Living')}
                            >
                                <View style={tw`p-3 bg-white rounded-full`}>
                                    <Image
                                        style={tw`h-12 w-12`}
                                        source={require('../../assets/tv.jpeg')}></Image>
                                </View>

                                <Text style={tw`mt-3 font-semibold`}>Living Room</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex flex-col items-center justify-center w-40 h-35 bg-[#FFEBC5] rounded-lg mt-5 shadow-md`}
                                onPress={() => (room == 'Kitchen') ? setRoom(null) : setRoom('Kitchen')}
                            >
                                <View style={tw`p-3 bg-white rounded-full`}>
                                    <Image
                                        style={tw`h-12 w-12`}
                                        source={require('../../assets/kitchen.jpeg')}></Image>
                                </View>

                                <Text style={tw`mt-3 font-semibold`}>Kitchen</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={tw`flex flex-col gap-10`}>
                        <View style={tw`flex flex-row items-center justify-between px-2`}>
                            <TouchableOpacity style={tw`flex flex-col items-center justify-center w-40 h-35 bg-[#E7DCFF] rounded-lg mt-5 shadow-md`}
                                onPress={() => (room == 'BDR1') ? setRoom(null) : setRoom('BDR1')}
                            >
                                <View style={tw`p-3 bg-white rounded-full`}>
                                    <Image
                                        style={tw`h-12 w-12`}
                                        source={require('../../assets/bedroom1.jpeg')}></Image>
                                </View>

                                <Text style={tw`mt-3 font-semibold`}>Living Room</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex flex-col items-center justify-center w-40 h-35 bg-[#FFEAF0] rounded-lg mt-5 shadow-md`}
                                onPress={() => (room == 'BDR2') ? setRoom(null) : setRoom('BDR2')}
                            >
                                <View style={tw`p-3 bg-white rounded-full`}>
                                    <Image
                                        style={tw`h-12 w-12`}
                                        source={require('../../assets/bedroom2.jpeg')}></Image>
                                </View>

                                <Text style={tw`mt-3 font-semibold`}>Kitchen</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={tw`${(room != null) ? '' : 'hidden'}`}>
                    <Text style={tw`text-3xl font-bold text-black`}>Devices</Text>
                    <View style={tw`flex items-center justify-center w-full h-50 mt-5`}>
                        <TouchableOpacity
                        style={tw`${(state == 'off' ? 'bg-gray-200' : 'bg-green-300')} p-20 rounded-full `}
                        activeOpacity={0.8}
                        onPress={() => (state == 'off') ? setState('on') : setState('off')}
                        >
                            <Text style={tw`text-3xl font-bold`}>{state}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}