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
  // 系统设置
  {
    path: '/systemSettings',
    component: Layout,
    redirect: '/systemSettings/databaseSettings',
    name: 'systemSettings',
    meta: {
      title: 'Top_Nav.System_Settings'
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
        line: true,
        meta: { title: 'System_Settings.Admin_Management', icon: 'icon-period' }
      },
      {
        path: '/systemSettings/rightsGroups',
        component: () => import('@/views/systemSettings/rightsGroups/index'),
        name: 'Rights Groups',
        line: true,
        meta: { title: 'System_Settings.Rights_Groups', icon: 'icon-period' }
      },
      {
        path: '/systemSettings/registered',
        component: () => import('@/views/systemSettings/registered/index'),
        name: 'Registered',
        meta: { title: 'System_Settings.Registered', icon: 'icon-period' }
      }
    ]
  },
  // 组织管理
  {
    path: '/organizationManagement',
    component: Layout,
    redirect: '/organizationManagement/peopleList',
    name: 'organizationManagement',
    meta: { title: 'Top_Nav.Organization_Management' },
    children: [
      {
        path: '/organizationManagement/peopleList',
        name: 'People List',
        component: () => import('@/views/organizationManagement/peopleList/index'),
        meta: { title: 'Organization_Management.People_List', icon: 'icon-user' }
      },
      {
        path: '/organizationManagement/departmentSetting',
        name: 'Department Setting',
        component: () => import('@/views/organizationManagement/departmentSetting/index'),
        meta: { title: 'Organization_Management.Department_Setting', icon: 'icon-department' }
      }
    ]
  },
  // 设备管理
  {
    path: '/deviceManagement',
    component: Layout,
    redirect: '/deviceManagement/deviceList',
    name: 'deviceManagement',
    meta: { title: 'Top_Nav.Device_Management' },
    children: [
      {
        path: '/deviceManagement/deviceList',
        name: 'Device List',
        component: () => import('@/views/deviceManagement/deviceList/index'),
        meta: { title: 'Device_Management.Device_List', icon: 'icon-a350' }
      },
      {
        path: '/deviceManagement/deviceGroup',
        name: 'Device Group',
        component: () => import('@/views/deviceManagement/deviceGroup/index'),
        meta: { title: 'Device_Management.Device_Group', icon: 'icon-accesses' }
      },
      {
        path: '/deviceManagement/accessControl',
        name: 'Access Control',
        line: true,
        component: () => import('@/views/deviceManagement/accessControl/index'),
        meta: { title: 'Device_Management.Access_Control', icon: 'icon-door-setting' }
      }
    ]
  },
  // 考勤管理
  {
    path: '/attendanceManagement',
    component: Layout,
    redirect: '/attendanceConfiguration',
    name: 'attendanceManagement',
    meta: { title: 'Top_Nav.Attendance_Management' },
    children: [
      {
        path: '/attendanceConfiguration',
        component: Delimiter,
        redirect: '/attendanceManagement/attendanceConfiguration/attendanceParameters',
        name: 'attendanceManagement',
        meta: { title: 'Attendance_Management.Attendance_Configuration' },
        children: [
          {
            path: '/attendanceManagement/attendanceConfiguration/attendanceParameters',
            component: () => import('@/views/attendanceManagement/attendanceParameters/index'),
            name: 'Attendance Parameters',
            meta: { title: 'Attendance_Management.Attendance_Parameters', icon: 'icon-ac' }
          },
          {
            path: '/attendanceManagement/attendanceConfiguration/attendanceStatus',
            component: () => import('@/views/attendanceManagement/attendanceStatus/index'),
            name: 'Attendance Status',
            meta: { title: 'Attendance_Management.Attendance_Status', icon: 'icon-ac' }
          },
          {
            path: '/attendanceManagement/attendanceConfiguration/leaveSettings',
            component: () => import('@/views/attendanceManagement/leaveSettings/index'),
            name: 'Leave Settings',
            meta: { title: 'Attendance_Management.Leave_Settings', icon: 'icon-ac' }
          },
          {
            path: '/attendanceManagement/attendanceConfiguration/jobSettings',
            component: () => import('@/views/attendanceManagement/jobSettings/index'),
            name: 'Job Settings',
            meta: { title: 'Attendance_Management.Job_Settings', icon: 'icon-ac' }
          },
          {
            path: '/attendanceManagement/attendanceConfiguration/holidaySettings',
            component: () => import('@/views/attendanceManagement/holidaySettings/index'),
            name: 'Holiday Settings',
            meta: { title: 'Attendance_Management.Holiday_Settings', icon: 'icon-ac' }
          }
        ]
      },
      {
        path: '/scheduleSetting',
        component: Delimiter,
        redirect: '/attendanceManagement/scheduleSetting/timeSetting',
        name: 'attendanceManagement',
        meta: { title: 'Attendance_Management.Schedule_Setting' },
        children: [
          {
            path: '/attendanceManagement/scheduleSetting/timeSetting',
            component: () => import('@/views/attendanceManagement/timeSetting/index'),
            name: 'Time Setting',
            meta: { title: 'Attendance_Management.Time_Period_Setting', icon: 'icon-ac' }
          },
          {
            path: '/attendanceManagement/scheduleSetting/shiftSetting',
            component: () => import('@/views/attendanceManagement/shiftSetting/index'),
            name: 'Shift Setting',
            meta: { title: 'Attendance_Management.Shift_Setting', icon: 'icon-ac' }
          },
          {
            path: '/attendanceManagement/scheduleSetting/staffScheduling',
            component: () => import('@/views/attendanceManagement/staffScheduling/index'),
            name: 'Staff Scheduling',
            meta: { title: 'Attendance_Management.Staff_Scheduling', icon: 'icon-ac' }
          }
        ]
      },
      {
        path: '/attendanceSetting',
        component: Delimiter,
        redirect: '/attendanceSetting/leaveWork',
        name: 'attendanceManagement',
        meta: { title: 'Attendance_Management.Attendance_Setting' },
        children: [
          {
            path: '/attendanceManagement/attendanceSetting/leaveWork',
            component: () => import('@/views/attendanceManagement/leaveWork/index'),
            name: 'Leave Work',
            line: true,
            meta: { title: 'Attendance_Management.Leave_Work', icon: 'icon-ac' }
          },
          {
            path: '/attendanceManagement/attendanceSetting/forgetAttendance',
            component: () => import('@/views/attendanceManagement/forgetAttendance/index'),
            name: 'Forget Attendance',
            meta: { title: 'Attendance_Management.Forget_Attendance', icon: 'icon-ac' }
          },
          {
            path: '/attendanceManagement/attendanceSetting/lateLeave',
            component: () => import('@/views/attendanceManagement/lateLeave/index'),
            name: 'Late Leave',
            line: true,
            meta: { title: 'Attendance_Management.Late_Leave', icon: 'icon-ac' }
          },
          {
            path: '/attendanceManagement/attendanceSetting/clearDate',
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
    name: 'statisticalReport',
    meta: { title: 'Top_Nav.Statistical_Report' },
    children: [
      {
        path: '/statisticalReport/attendanceRecord',
        component: () => import('@/views/statisticalReport/attendanceRecord/index'),
        name: 'Attendance Record',
        meta: { title: 'Statistical_Report.Attendance_Record', icon: 'icon-ac' }
      },
      {
        path: '/statisticalReport/statisticalTable',
        component: () => import('@/views/statisticalReport/statisticalTable/index'),
        name: 'Statistical Table',
        meta: { title: 'Statistical_Report.Statistical_Table', icon: 'icon-ac' }
      }
    ]
  }
  // { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
