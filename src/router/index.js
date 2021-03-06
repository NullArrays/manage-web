import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Repair from '@/components/Repair'
import Head from '@/components/Head'
import Check from '@/components/Check'
import Register from '@/components/Register'
import Equipinfo from '@/components/Equipinfo'
import ChangePass from '@/components/ChangePass'
import Main from '@/components/Main'
import UserManage from '@/components/admin/UserManage'
import DepartManage from '@/components/admin/DepartManage'
import ClassManage from '@/components/admin/ClassManage'
import EquipManage from '@/components/admin/EquipManage'
import RepairList from '@/components/repair/RepairList'
import TaskList from '@/components/repair/TaskList'
import EquipCheck from '../components/check/EquipCheck'
import DstroyList from '../components/check/DstroyList'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'user',
          component: UserManage
        },
        {
          path: 'depart',
          component: DepartManage
        },
        {
          path: 'class',
          component: ClassManage
        },
        {
          path: 'equip',
          component: EquipManage
        },
        {
          path: 'repair/list',
          component: RepairList
        },
        {
          path: 'repair/task',
          component: TaskList
        },
        {
          path: 'check/equip',
          component: EquipCheck,
        },
        {
          path: 'destroy/list',
          component: DstroyList
        },
        {
          path: '/changePass',
          name: 'ChangePass',
          component: ChangePass
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/repair',
      name: 'Repair',
      component: Repair
    },
    {
      path: '/head',
      name: 'Head',
      component: Head
    },
    {
      path: '/check',
      name: 'Check',
      component: Check
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/equipinfo',
      name: 'Equipinfo',
      component: Equipinfo
    },

  ]
})
