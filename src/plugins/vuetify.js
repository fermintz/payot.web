import Vue from "vue";
import Vuetify from "vuetify/lib";
import {VueMasonryPlugin} from 'vue-masonry';
import '@/assets/css/global-font.scss';
import '@/assets/css/global.scss';

Vue.use(Vuetify);
Vue.use(VueMasonryPlugin);

export default new Vuetify({});
