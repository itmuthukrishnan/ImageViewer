import React from 'react';
import { View, Text, ActivityIndicator, SafeAreaView, Image, StyleSheet,FlatList,Dimensions , TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { getAuthor, getAuthorError } from '../reducer/authorReducer'
import { bindActionCreators } from 'redux';
import fetchAuthorActions from '../APIservice/fetchAuthors';
import Icon from 'react-native-vector-icons/Ionicons'

const SCREEN_WIDTH = Dimensions.get('window').width
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);

    }

    UNSAFE_componentWillMount() {
        this.fetchPhoto()
    }

    fetchPhoto = () => {
        const { fetchAuthors } = this.props;
        fetchAuthors();
    }

    shouldComponentRender() {
        const { pending } = this.props;
        if (pending === false) return false;
        // more tests
        return true;
    }

    loadSpinner = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    
    customImageView = (item) => {
        return (
            <View style={styles.imageContainer}>
                <View style={{ height: 50, backgroundColor: '#fff' }}>
                    <Text style={styles.authorText}>{item.author}</Text>
                </View>
                <Image source={{ uri: `https://picsum.photos/200/300?image=${item.id}` }} style={{ width: 200, height: 300 }} resizeMode="contain" />
            </View>
        )
    }

    render() {
        const { authors, error, pending } = this.props;
        console.log('authors', authors)
        if (!this.shouldComponentRender()) return { loadSpinner }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={() => { this.fetchPhoto() }}>
                        <Icon name="refresh-outline" size={25} color="#fff" backgroundColor="#333" />
                        <Text style={styles.text}>Tap to Refresh</Text>
                    </TouchableOpacity>
                    <FlatList
                        horizontal
                        data={authors}
                        renderItem={({ item }) => this.customImageView(item)}
                        keyExtractor={(item) => `${item.id}`}
                        extraData={authors}
                        pagingEnabled={true}
                        style={styles.listContainer}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </SafeAreaView>
        )

    }
}

const mapStateToProps = state => ({
    error: getAuthorError(state),
    authors: state.author.authorsList
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAuthors: fetchAuthorActions
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)


const styles = StyleSheet.create({

    container:{
        paddingTop: 30, 
        alignItems: 'center',
    },
    imageContainer:{
        width:210,
    },
    authorText:{
        fontSize:18,
        fontWeight:'500',
        color:'#333',
        padding:10
    },
    listContainer:{
        width: SCREEN_WIDTH + 5, 
        height:'100%',
    },
    ButtonContainer:{
        flexDirection:'row',
        backgroundColor:'#333',
        padding:15,
        margin:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        width:SCREEN_WIDTH/2
    },
    text:{
        color:'#fff',
        fontWeight:'700',
        paddingHorizontal:10
    }
})