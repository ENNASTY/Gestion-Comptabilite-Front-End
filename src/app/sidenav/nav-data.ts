export const navbarData = [
    {
        routeLink: 'factures',
        icon: 'fa-solid fa-money-bill-trend-up',
        label: 'Facture',
        submenus: []
    },
    {
        routeLink: 'employe',
        icon: 'fa-solid fa-user',
        label: 'Employe',
        submenus: []
    },
    {
        routeLink: 'taux',
        icon: 'fas fa-chart-line',
        label: 'Taux',
        submenus: [
            {
                routeLink: 'taux/taux-ir',
                label: 'Taux IR'
            },
            {
                routeLink: 'taux/taux-is',
                label: 'Taux IS'
            }
        ]
    },
    {
        routeLink: 'declarations',
        icon: 'fas fa-file-alt',
        label: 'Déclarations',
        submenus: [
            {
                routeLink: 'declarations/declarations-ir',
                label: 'Déclarations IR'
            },
            {
                routeLink: 'declarations/declarations-is',
                label: 'Déclarations IS'
            },
            {
                routeLink: 'declarations/declaration-tva',
                label: 'Déclaration TVA'
            }
        ]
    }
];
