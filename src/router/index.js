import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/', redirect: '/systemSetup', component: Layout, hidden: true },
  {
    path: '/systemSetup',
    component: Layout,
    redirect: '/systemSetup/databaseSettings',
    name: 'systemSetup',
    meta: {
      title: 'System_Setup',
      icon: 'icon-changed'
    },
    children: [
      {
        path: '/systemSetup/databaseSettings',
        component: () => import('@/views/systemSetup/databaseSettings/index'), // Parent router-view
        name: 'Database Settings',
        meta: { title: 'Database_Settings', icon: 'icon-change' }
      },
      {
        path: '/systemSetup/basicSetup',
        component: () => import('@/views/systemSetup/basicSetup/index'),
        name: 'Basic Setup',
        meta: { title: 'Basic_Setup', icon: 'icon-period' }
      },
      {
        path: '/systemSetup/attendanceParameters',
        component: () => import('@/views/systemSetup/attendanceParameters/index'),
        name: 'Attendance Parameters',
        meta: { title: 'Attendance_Parameters', icon: 'icon-period' }
      },
      {
        path: '/systemSetup/departmentManagement',
        component: () => import('@/views/systemSetup/departmentManagement/index'),
        name: 'Department Management',
        meta: { title: 'Department_Management', icon: 'icon-period' }
      },
      {
        path: '/systemSetup/attendanceStatus',
        component: () => import('@/views/systemSetup/attendanceStatus/index'),
        name: 'Attendance Status',
        meta: { title: 'Attendance_Status', icon: 'icon-period' }
      },
      {
        path: '/systemSetup/fakeSettings',
        component: () => import('@/views/systemSetup/fakeSettings/index'),
        name: 'Fake Settings',
        meta: { title: 'Fake_Settings', icon: 'icon-period' }
      },
      {
        path: '/systemSetup/workSettings',
        component: () => import('@/views/systemSetup/workSettings/index'),
        name: 'Work Settings',
        meta: { title: 'Work_Settings', icon: 'icon-period' }
      },
      {
        path: '/systemSetup/holidaySettings',
        component: () => import('@/views/systemSetup/holidaySettings/index'),
        name: 'Holiday Settings',
        meta: { title: 'Holiday_Settings', icon: 'icon-period' }
      },
      {
        path: '/systemSetup/workforceManagement',
        component: () => import('@/views/systemSetup/workforceManagement/index'),
        name: 'Workforce Management',
        meta: { title: 'Workforce_Management', icon: 'icon-period' }
      },
      {
        path: '/systemSetup/accessControl',
        component: () => import('@/views/systemSetup/accessControl/index'),
        name: 'Access Control',
        meta: { title: 'Access_Control', icon: 'icon-period' }
      },
      {
        path: '/systemSetup/userManagement',
        component: () => import('@/views/systemSetup/userManagement/index'),
        name: 'User Management',
        meta: { title: 'User_Management', icon: 'icon-period' }
      }
    ]
  },
  {
    path: '/userManagement',
    component: Layout,
    redirect: '/userManagement/userList',
    name: 'userManagement',
    meta: { title: 'User_Management', icon: 'icon-admin-hover' },
    children: [
      {
        path: '/userManagement/userList',
        name: 'User List',
        component: () => import('@/views/userManagement/userList/index'),
        meta: { title: 'User_List', icon: 'icon-admin' }
      },
      {
        path: '/userManagement/equipmentGroup',
        name: 'Equipment Group',
        component: () => import('@/views/userManagement/equipmentGroup/index'),
        meta: { title: 'Equipment_Group', icon: 'icon-ac' }
      }
    ]
  },
  {
    path: '/deviceManagement',
    component: Layout,
    redirect: '/deviceManagement/deviceList',
    name: 'deviceManagement',
    meta: { title: 'Device_Management', icon: 'icon-ac' },
    children: [
      {
        path: '/deviceManagement/timeSync',
        name: 'Time Sync',
        component: () => import('@/views/deviceManagement/timeSync/index'),
        meta: { title: 'Time_Sync', icon: 'icon-ac' }
      },
      {
        path: '/deviceManagement/deviceParameters',
        name: 'Device Parameters',
        component: () => import('@/views/deviceManagement/deviceParameters/index'),
        meta: { title: 'Device_Parameters', icon: 'icon-ac' }
      },
      {
        path: '/deviceManagement/ringSetting',
        name: 'Ring Setting',
        component: () => import('@/views/deviceManagement/ringSetting/index'),
        meta: { title: 'Ring_Setting', icon: 'icon-ac' }
      },
      {
        path: '/deviceManagement/deviceList',
        name: 'Device List',
        component: () => import('@/views/deviceManagement/deviceList/index'),
        meta: { title: 'Device_List', icon: 'icon-admin' }
      }
    ]
  },

  {
    path: '/recordManagement',
    component: Layout,
    redirect: '/recordManagement',
    name: 'recordManagement',
    meta: { title: 'Record_Management', icon: 'icon-ac' },
    children: [
      {
        path: '/recordManagement',
        component: () => import('@/views/recordManagement/index'),
        meta: { title: 'Record_Management', icon: 'icon-ac' }
      }
    ]
  },
  {
    path: '/attendanceManagement',
    component: Layout,
    redirect: '/attendanceManagement',
    name: 'attendanceManagement',
    meta: { title: 'Attendance_Management', icon: 'icon-ac' },
    children: [
      {
        path: '/attendanceManagement',
        component: () => import('@/views/attendanceManagement/index'),
        meta: { title: 'Attendance_Management', icon: 'icon-ac' }
      }
    ]
  },

  {
    path: '/dataManagement',
    component: Layout,
    redirect: '/dataManagement/forgetAttendance',
    name: 'dataManagement',
    meta: {
      title: 'Data_Management',
      icon: 'icon-cloud'
    },
    children: [
      {
        path: '/dataManagement/forgetAttendance',
        component: () => import('@/views/dataManagement/forgetAttendance/index'), // Parent router-view
        name: 'Forget Attendance',
        meta: { title: 'Forget_Attendance', icon: 'icon-change' }
      },
      {
        path: '/dataManagement/publicLeave',
        component: () => import('@/views/dataManagement/publicLeave/index'),
        name: 'Public Leave',
        meta: { title: 'Public_Leave', icon: 'icon-period' }
      },
      {
        path: '/dataManagement/Late',
        component: () => import('@/views/dataManagement/Late/index'),
        name: 'Late',
        meta: { title: 'Late', icon: 'icon-period' }
      },
      {
        path: '/dataManagement/outdatedData',
        component: () => import('@/views/dataManagement/outdatedData/index'),
        name: 'Outdated Data',
        meta: { title: 'Outdated_Data', icon: 'icon-period' }
      },
      {
        path: '/dataManagement/logRecord',
        component: () => import('@/views/dataManagement/logRecord/index'),
        name: 'Log Record',
        meta: { title: 'Log_Record', icon: 'icon-period' }
      },
      {
        path: '/dataManagement/adminLog',
        component: () => import('@/views/dataManagement/adminLog/index'),
        name: 'Admin Log',
        meta: { title: 'Admin_Log', icon: 'icon-period' }
      }
    ]
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
    name: 'dashboard',
    meta: { title: 'Dashboard', icon: 'icon-nav-dashboard' },
    children: [{
      path: '/dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'icon-nav-dashboard' }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
