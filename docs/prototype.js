
// Adpated from https://techstacker.com/posts/yz6e9Ksz6ARbNpQAZ/vanilla-javascript-how-to-detect-clicks-outside-of-an
function loadRevealHotspotListeners() {
    document.addEventListener('click', function (e) {
        // If user clicks inside the element, do nothing
        if (event.target.closest(".marker")) return;

        // If user clicks outside the element, hide it!
        const markers = document.querySelectorAll('.marker');
        if (markers && markers.length > 0) {
            markers.forEach(marker => {
                marker.classList.add('reveal');
            });
            setTimeout(() => {
                markers.forEach(marker => {
                    marker.classList.remove('reveal');
                });
            }, 300);
        }
    });
}


function loadPage(pageName) {
    if (typeof pageName === 'undefined') {
        pageName = 'Bun_Bun_Landing';
    }
    const hotspots = document.getElementById('hotspots');
    if (hotspots) {
        while (hotspots.hasChildNodes()) {
            hotspots.removeChild(hotspots.lastChild);
        }
    }
    const host = document.getElementById('page');
    if (host) {
        host.classList.remove('loading');
        const page = pages.find(x => x.pageName === pageName);
        if (page) {
            const url = 'url(screens/' + page.pageName + '.png)';
            host.style.backgroundImage = url;
            setTimeout(() => {
                host.classList.add('loading');
                if (page.markers && page.markers.length > 0) {
                    const hotspots = document.getElementById('hotspots');
                    if (hotspots) {
                        while (hotspots.hasChildNodes()) {
                            hotspots.removeChild(hotspots.lastChild);
                        }
                        page.markers.forEach(marker => {
                            const elem = document.createElement('div');
                            elem.classList.add('marker');
                            elem.style.position = 'absolute';
                            elem.style.zIndex = '2';
                            elem.style.top = marker.top + 'px';
                            elem.style.left = marker.left + 'px';
                            elem.style.width = marker.width + 'px';
                            elem.style.height = marker.height + 'px';
                            elem.setAttribute('id', page.pageName + '_to_' + marker.target);
                            hotspots.appendChild(elem);
                            elem.addEventListener('click', () => {
                                loadPage(marker.target);
                            });
                        })
                    }
                }
            });
        }
    }
}

const pages = [{
        pageName: 'Bun_Bun_Landing',
        markers: [{
            top: 460,
            left: 500,
            width: 180,
            height: 90,
            target: 'Bun_Bun_Item_List'
        }]
    },
    {
        pageName: 'Bun_Bun_Item_List',
        markers: [{
            top: 100,
            left: 90,
            width: 990,
            height: 600,
            target: 'Bun_Bun_Item_List_Picking_Item'
        }]
    },
    {
        pageName: 'Bun_Bun_Item_List_Picking_Item',
        markers: [{
            top: 102,
            left: 430,
            width: 320,
            height: 300,
            target: 'Bun_Bun_Item_Details'
        }]
    },
    {
        pageName: 'Bun_Bun_Item_Details',
        markers: [{
            top: 500,
            left: 622,
            width: 360,
            height: 80,
            target: 'Bun_Bun_Item_Details_Pane_Open_For_Glaze'
        }]
    },
    {
        pageName: 'Bun_Bun_Item_Details_Pane_Open_For_Glaze',
        markers: [{
            top: 500,
            left: 622,
            width: 360,
            height: 80,
            target: 'Bun_Bun_Item_Details_Pane_Open_For_Units'
        }]
    },
    {
        pageName: 'Bun_Bun_Item_Details_Pane_Open_For_Units',
        markers: [{
            top: 500,
            left: 622,
            width: 360,
            height: 80,
            target: 'Bun_Bun_Item_Details_Filled'
        }]
    },
    {
        pageName: 'Bun_Bun_Item_Details_Filled',
        markers: [{
            top: 590,
            left: 630,
            width: 160,
            height: 60,
            target: 'Bun_Bun_Item_Details_Cart_Open_Step_1'
        }]
    },
    {
        pageName: 'Bun_Bun_Item_Details_Item_Details_Page',
        markers: [{
            top: 713,
            left: 550,
            width: 77,
            height: 75,
            target: 'Bun_Bun_Item_Details_Cart_Open_Step_1'
        }]
    },
    {
        pageName: 'Bun_Bun_Item_Details_Cart_Open_Step_1',
        markers: [{
                top: 604,
                left: 170,
                width: 125,
                height: 60,
                target: 'Bun_Bun_Item_Details_Item_Details_Page'
            },
            {
                top: 604,
                left: 877,
                width: 125,
                height: 60,
                target: 'Bun_Bun_Item_Details_Cart_Open_Step_2'
            }
        ]
    },
    {
        pageName: 'Bun_Bun_Item_Details_Cart_Open_Step_2',
        markers: [{
                top: 604,
                left: 170,
                width: 125,
                height: 60,
                target: 'Bun_Bun_Item_Details_Cart_Open_Step_1'
            },
            {
                top: 604,
                left: 877,
                width: 125,
                height: 60,
                target: 'Bun_Bun_Item_Details_Cart_Open_Step_3'
            }
        ]
    },
    {
        pageName: 'Bun_Bun_Item_Details_Cart_Open_Step_3',
        markers: [{
                top: 604,
                left: 170,
                width: 125,
                height: 60,
                target: 'Bun_Bun_Item_Details_Cart_Open_Step_2'
            },
            {
                top: 604,
                left: 877,
                width: 125,
                height: 60,
                target: 'Bun_Bun_Order_Complete'
            }
        ]
    },
    {
        pageName: 'Bun_Bun_Order_Complete',
        markers: [{
            top: 194,
            left: 290,
            width: 604,
            height: 423,
            target: 'Bun_Bun_Item_List'
        }]
    },
    {
        pageName: 'Bun_Bun_Find_Us'
    }
];


const compulsoryMarkers = [{
        top: 0,
        left: 100,
        width: 100,
        height: 50,
        target: 'Bun_Bun_Landing'
    },
    {
        top: 0,
        left: 990,
        width: 100,
        height: 50,
        target: 'Bun_Bun_Find_Us'
    }
];
pages.forEach(page => {
    compulsoryMarkers.forEach(marker => {
        if (page.pageName !== marker.target) {
            if (!page.markers) {
                page.markers = [];
            }
            page.markers.push(marker);
        }
    });
})