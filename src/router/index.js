import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import Delimiter from '../views/layout/Delimiter'

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
  { path: '/', redirect: '/systemSettings', component: Layout, hidden: true },
  {
    path: '/systemSettings',
    component: Layout,
    redirect: '/systemSettings/databaseSettings',
    name: 'systemSettings',
    meta: {
      title: 'Top_Nav.System_Settings',
      icon: 'icon-changed'
    },
    children: [
      {
        path: '/systemSettings/databaseSettings',
        component: () => import('@/views/systemSettings/databaseSettings/index'),
        name: 'Database Settings',
        meta: { title: 'System_Settings.Database_Settings', icon: 'icon-change' }
      },
      {
        path: '/systemSettings/basicParameters',
        component: () => import('@/views/systemSettings/basicParameters/index'),
        name: 'Basic Parameters',
        meta: { title: 'System_Settings.Basic_Parameters', icon: 'icon-period' }
      },
      {
        path: '/systemSettings/adminManagement',
        component: () => import('@/views/systemSettings/adminManagement/index'),
        name: 'Admin Management',
        meta: { title: 'System_Settings.Admin_Management', icon: 'icon-period' }
      },
      {
        path: '/systemSettings/rightsGroups',
        component: () => import('@/views/systemSettings/rightsGroups/index'),
        name: 'Rights Groups',
        meta: { title: 'System_Settings.Rights_Groups', icon: 'icon-period' }
      }
    ]
  },
  {
    path: '/organizationManagement',
    component: Layout,
    redirect: '/organizationManagement/peopleList',
    name: 'organizationManagement',
    meta: { title: 'Top_Nav.Organization_Management', icon: 'icon-admin-hover' },
    children: [
      {
        path: '/organizationManagement/peopleList',
        name: 'People List',
        component: () => import('@/views/organizationManagement/peopleList/index'),
        meta: { title: 'Organization_Management.People_List', icon: 'icon-admin' }
      },
      {
        path: '/organizationManagement/departmentSetting',
        name: 'Department Setting',
        component: () => import('@/views/organizationManagement/departmentSetting/index'),
        meta: { title: 'Organization_Management.Department_Setting', icon: 'icon-ac' }
      }
    ]
  },
  {
    path: '/deviceManagement',
    component: Layout,
    redirect: '/deviceManagement/deviceList',
    name: 'Device Management',
    meta: { title: 'Top_Nav.Device_Management', icon: 'icon-ac' },
    children: [
      {
        path: '/deviceManagement/deviceList',
        name: 'Device List',
        component: () => import('@/views/deviceManagement/deviceList/index'),
        meta: { title: 'Device_Management.Device_List', icon: 'icon-admin' }
      },
      {
        path: '/deviceManagement/deviceGroup',
        name: 'Device Group',
        component: () => import('@/views/deviceManagement/deviceGroup/index'),
        meta: { title: 'Device_Management.Device_Group', icon: 'icon-ac' }
      },
      {
        path: '/deviceManagement/accessControl',
        name: 'Access Control',
        component: () => import('@/views/deviceManagement/accessControl/index'),
        meta: { title: 'Device_Management.Access_Control', icon: 'icon-ac' }
      }
    ]
  },
  {
    path: '/attendanceManagement',
    component: Layout,
    redirect: '/attendanceParameters/attendanceParameters',
    name: 'Attendance Management',
    meta: { title: 'Top_Nav.Attendance_Management', icon: 'icon-ac' },
    children: [
      {
        path: '/attendanceConfiguration',
        component: Delimiter,
        redirect: '/attendanceParameters/attendanceParameters',
        meta: { title: 'Attendance_Management.Attendance_Configuration', icon: 'icon-ac' },
        children: [
          {
            path: 'attendanceParameters',
            component: () => import('@/views/attendanceManagement/attendanceParameters/index'),
            name: 'Attendance Parameters',
            meta: { title: 'Attendance_Management.Attendance_Parameters', icon: 'icon-ac' }
          },
          {
            path: 'attendanceStatus',
            component: () => import('@/views/attendanceManagement/attendanceStatus/index'),
            name: 'Attendance Status',
            meta: { title: 'Attendance_Management.Attendance_Status', icon: 'icon-ac' }
          },
          {
            path: 'leaveSettings',
            component: () => import('@/views/attendanceManagement/leaveSettings/index'),
            name: 'Leave Settings',
            meta: { title: 'Attendance_Management.Leave_Settings', icon: 'icon-ac' }
          },
          {
            path: 'jobSettings',
            component: () => import('@/views/attendanceManagement/jobSettings/index'),
            name: 'Job Settings',
            meta: { title: 'Attendance_Management.Job_Settings', icon: 'icon-ac' }
          },
          {
            path: 'holidaySettings',
            component: () => import('@/views/attendanceManagement/holidaySettings/index'),
            name: 'Holiday Settings',
            meta: { title: 'Attendance_Management.Holiday_Settings', icon: 'icon-ac' }
          }
        ]
      },
      {
        path: '/scheduleSetting',
        component: Delimiter,
        redirect: '/scheduleSetting/timeSetting',
        meta: { title: 'Attendance_Management.Schedule_Setting', icon: 'icon-ac' },
        children: [
          {
            path: 'timeSetting',
            component: () => import('@/views/attendanceManagement/timeSetting/index'),
            name: 'Time Setting',
            meta: { title: 'Attendance_Management.Time_Period_Setting', icon: 'icon-ac' }
          },
          {
            path: 'shiftSetting',
            component: () => import('@/views/attendanceManagement/shiftSetting/index'),
            name: 'Shift Setting',
            meta: { title: 'Attendance_Management.Shift_Setting', icon: 'icon-ac' }
          },
          {
            path: 'staffScheduling',
            component: () => import('@/views/attendanceManagement/staffScheduling/index'),
            name: 'Staff Scheduling',
            meta: { title: 'Attendance_Management.AttendanStaff_Schedulingce_Parameters', icon: 'icon-ac' }
          }
        ]
      },
      {
        path: '/attendanceSetting',
        component: Delimiter,
        redirect: '/attendanceSetting/leaveWork',
        meta: { title: 'Attendance_Management.Attendance_Setting', icon: 'icon-ac' },
        children: [
          {
            path: 'leaveWork',
            component: () => import('@/views/attendanceManagement/leaveWork/index'),
            name: 'Leave Work',
            meta: { title: 'Attendance_Management.Leave_Work', icon: 'icon-ac' }
          },
          {
            path: 'forgetAttendance',
            component: () => import('@/views/attendanceManagement/forgetAttendance/index'),
            name: 'Forget Attendance',
            meta: { title: 'Attendance_Management.Forget_Attendance', icon: 'icon-ac' }
          },
          {
            path: 'lateLeave',
            component: () => import('@/views/attendanceManagement/lateLeave/index'),
            name: 'Late Leave',
            meta: { title: 'Attendance_Management.Late_Leave', icon: 'icon-ac' }
          },
          {
            path: 'clearDate',
            component: () => import('@/views/attendanceManagement/clearDate/index'),
            name: 'Clear Date',
            meta: { title: 'Attendance_Management.Clear_Date', icon: 'icon-ac' }
          }
        ]
      }
    ]
  },
  {
    path: '/statisticalReport',
    component: Layout,
    redirect: '/statisticalReport/attendanceRecord',
    name: 'attendanceRecord',
    meta: { title: 'Top_Nav.Statistical_Report', icon: 'icon-ac' },
    children: [
      {
        path: '/attendanceRecord',
        component: () => import('@/views/statisticalReport/attendanceRecord/index'),
        name: 'Attendance Record',
        meta: { title: 'Statistical_Report.Attendance_Record', icon: 'icon-ac' }
      },
      {
        path: '/statisticalTable',
        component: () => import('@/views/statisticalReport/statisticalTable/index'),
        name: 'Statistical Table',
        meta: { title: 'Statistical_Report.Statistical_Table', icon: 'icon-ac' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
