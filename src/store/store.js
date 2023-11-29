import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        apiKey: '303d3f6dc128954cdcfaeba8b513107b',
        getFullWeather: null,
    },
    mutations: {
        getWeather(state, payload){
            state.getFullWeather = payload;
        }
    },
    actions: {
        async getWeather({commit, state}, city){
            try {
                let res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`);
                let weather = res.data[0]
                let {lat, lon, name} = weather;
                console.log(weather);
                
                let res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=${state.apiKey}&units=metric`);
                let weatherInfo = res2.data;
                let weatherObj = {...weatherInfo, name: name}
                commit('getWeather', weatherObj);
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        getFullWeather: state => state.getFullWeather
    }
});

export default store