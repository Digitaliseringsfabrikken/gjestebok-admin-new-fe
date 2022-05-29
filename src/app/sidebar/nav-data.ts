export const navbarData = [
  {
    routeLink: 'admin-dashboard',
    icon: 'fa fa-home',
    label: 'Dashboard'
  },
  {
    routeLink: 'admin-clients',
    icon: 'fa fa-box-open',
    label: 'Clients'
  },
  {
    routeLink: 'workplaces',
    icon: 'fa fa-chart-bar',
    label: 'Statistics'
  },
  {
    routeLink: 'client-dashboard',
    icon: 'fa fa-home',
    label: 'Menu with Children',
    submenuLevel1: [
      {
        routeLink: 'workplace-locations',
        icon: 'fa fa-home', // icon if needed
        label: 'Locations',
      },
      {
        routeLink: 'location',
        icon: 'fa fa-home', // icon if needed
        label: 'Companies',
        submenuLevel2: [
          {
            routeLink: 'location',
            icon: 'fa fa-home', // icon if needed
            label: 'Employees',
          }
        ]
      }
    ]
  },

];
