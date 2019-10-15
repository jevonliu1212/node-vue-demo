import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Upload from '@/components/Upload'
import FileList from '@/components/FileList'
import Index from '@/components/Index'
import VuejsDialog from 'vuejs-dialog'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(VuejsDialog)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [{
        path: '/upload1',
        name: 'Upload',
        component: Upload
      },
      {
        path: '/list',
        name: 'FileList',
        component: FileList
      }]
    }
  ]
})
