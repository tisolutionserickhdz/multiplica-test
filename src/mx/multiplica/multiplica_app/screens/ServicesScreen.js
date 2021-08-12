/**
 * @description Pantalla de Servicios dummy
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import GeneralStyles from '../styles/GeneralStyles';
import CustomHeaderComponent from '../components/CustomHeaderComponent';
import LoaderIndicatorComponent from '../components/LoaderIndicatorComponent';
import { ACTIVE_OPACITY, PRODUCTS_ARRAY } from '../utilities/GlobalConstantsUtilities';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @description Constante principal de ServicesScreen
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 * @return {*} Renderiza componentes
 */
const ServicesScreen = ({ navigation }) => {

    // CONSTANTES Y HOOKS
    const [loading, setLoading] = useState(true);
    const [showsProductDescription, setShowsProductDescription] = useState(false);
    const [productDescription, setproductDescription] = useState('');
    const [name, setName] = useState('Usuario');
    const [email, setEmail] = useState('usuario@example.com');

    useEffect(() => {
        AsyncStorage.getItem('@userInfoSignedObject').then((res) => {
            const parsedResponse = JSON.parse(res);
            console.log('@userInfoSignedObject RECUPERADO EN SERVICES');
            setName(parsedResponse.displayName);
            setEmail(parsedResponse.email);
            setLoading(false);
        });
    }, []);

    // SE RENDERIZAN ELEMENTOS VISUALES
    if (loading) {
        return (
            <LoaderIndicatorComponent />
        );
    } else {
        return (
            <View style={GeneralStyles.mainContainer}>
                <CustomHeaderComponent navigation={navigation} />
                <View style={GeneralStyles.productsMainContainer}>

                    <View style={GeneralStyles.welcomeContainer}>
                        <Text style={GeneralStyles.productsLabelText}>{'¡Hola, ' + name + '!'}</Text>
                        <Text style={GeneralStyles.productsLabelTextCenteredDescription}>{'A continuación, encontrarás nuestras mejores recomendaciones en productos para ti, mismas que recibes en tu correo electrónico '}</Text>
                        <Text style={GeneralStyles.productsLabelTextCenteredEmail}>{email}</Text>
                    </View>

                    <View style={GeneralStyles.productsContainer}>
                        <FlatList
                            data={PRODUCTS_ARRAY}
                            horizontal={true}
                            vertical={false}
                            renderItem={
                                ({ item }) =>
                                    <TouchableOpacity
                                        style={GeneralStyles.productContainerCard}
                                        activeOpacity={ACTIVE_OPACITY}
                                        onPress={() => {
                                            console.log('PRODUCT ITEM PRESSED: ', item.description);
                                            setShowsProductDescription(true);
                                            setproductDescription(item.description);
                                        }}
                                    >
                                        <Image
                                            source={item.image}
                                            style={GeneralStyles.productImageSize}
                                            resizeMode={'contain'}
                                        />
                                        <View style={GeneralStyles.overlayImage}>
                                            <Text style={GeneralStyles.productTitle}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                            }
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            initialNumToRender={5}
                            maxToRenderPerBatch={5}
                            updateCellsBatchingPeriod={100}
                            nestedScrollEnabled={true}
                        />
                    </View>


                    {
                        showsProductDescription ?
                            <View style={GeneralStyles.productsDescriptionContainer}>
                                <Text style={GeneralStyles.productDescription}>{productDescription}</Text>
                                <Text style={GeneralStyles.redDivider}>______________________________</Text>
                            </View>
                            : null
                    }

                </View>
            </View>
        );
    }
}

// SE ESPECIFICAN LOS VALORES DE LAS PROPS
ServicesScreen.propTypes = {
    navigation: PropTypes.object
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default ServicesScreen;
