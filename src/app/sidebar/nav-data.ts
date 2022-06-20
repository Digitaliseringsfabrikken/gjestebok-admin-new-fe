export const navbarData = [
  {
    routeLink: 'admin-dashboard',
    icon: './assets/sidebar/home.svg',
    label: 'Home'
  },
  {
    routeLink: 'admin-clients',
    icon: './assets/sidebar/clients.svg',
    label: 'Clients'
  },
  {
    routeLink: 'workplaces',
    collapse: 'fa fa-caret-down',
    icon: './assets/sidebar/workplaces.svg',
    label: 'Workplaces',
    submenuLevel1: [
      {
        routeLink: 'workplace-locations',
        icon: 'fa fa-home', // icon if needed
        label: 'Locations',
      },
      {
        routeLink: 'workplace-locations',
        icon: 'fa fa-home', // icon if needed
        label: 'Companies',
      },
      {
        routeLink: 'workplace-locations',
        icon: 'fa fa-home', // icon if needed
        label: 'Employees',
      }

    ]
  },
  {
    routeLink: 'devices',
    icon: './assets/sidebar/devices.svg',
    label: 'Devices'
  },
  {
    routeLink: 'guests',
    icon: './assets/sidebar/guests.svg',
    label: 'Guests'
  },
  {
    routeLink: 'settings',
    icon: './assets/sidebar/settings.svg',
    label: 'Settings'
  },
  {
    routeLink: 'alarms',
    icon: './assets/sidebar/alarms.svg',
    label: 'Alarms'
  }

];