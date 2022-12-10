import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                red: '#8C0303',
                green: '#AFCC0F',
                yellow: '#F2B705',
            }
        }
    }
});
