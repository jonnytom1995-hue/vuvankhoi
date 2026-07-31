// APP DATA CONFIGURATION

const apps = [
{
        name: '<strong><em> MENU Liên Quân IOS ✅</em></strong>',
        url: 'https://testflight.apple.com/join/2Yzp7NMW',
        img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7f/f9/70/7ff970e7-3b59-b769-34b5-e18c10e48990/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg',
        descriptions: 'Link Cài Trực Tiếp Hack Map LQ Cập Nhật Ngày 31/07/2026'
    },{
        name: '<strong><em> Minecraft PE IOS ✅</em></strong>',
        url: 'https://sub2s.com/1785382538',
        img: 'https://i.postimg.cc/Y05W9Pv8/IMG-4773.png',
        descriptions: 'Link Cài Trực Tiếp Cập Nhật Ngày 30/07/2026'
    },{ 
        name: '<strong><em>Delta X VNG IOS Bản Gốc ✅</em></strong>',
        url: 'https://www.ngocbonggaming.com/2026/07/link-tai-delta-x-vng-ios-moi-nhat.html',
        img: 'https://i.postimg.cc/j5Pt7VJt/IMG-3155.jpg',
        descriptions: 'Link Cài Trực Tiếp V2.731 Cập Nhật Ngày 30/07/2026'
    },{ 
        name: '<strong><em>Delta X VNG IOS Fix Lag ✅</em></strong>',
        url: 'https://sub2s.com/1785057275',
        img: 'https://i.postimg.cc/pXQNsVQs/IMG-3417.jpg',
        descriptions: 'Link Cài Trực Tiếp V2.731 Cập Nhật Ngày 30/07/2026'
    },{ 
        name: '<strong><em>Delta X Quốc Tế IOS  ✅</em></strong>',
        url: 'https://sub2s.com/1785207240',
        img: 'https://i.postimg.cc/wMkzwh26/IMG-4719.jpg',
        descriptions: 'Link Cài Trực Tiếp V2.731 Cập Nhật Ngày 30/07/2026'
    },{ 
        name: '<strong><em>Delta X Quốc Tế IOS Fix Lag  ✅</em></strong>',
        url: 'https://sub2s.com/1785126981',
        img: 'https://i.postimg.cc/wMkzwh26/IMG-4719.jpg',
        descriptions: 'Link Cài Trực Tiếp V2.731 Cập Nhật Ngày 30/07/2026'
    },{
        name: '<strong><em> MENU FF IOS ✅</em></strong>',
        url: 'https://sub2s.com/1785053328',
        img: 'https://i.postimg.cc/NfBCGPw3/1JSOL8E2V-AD5H4H.jpg',
        descriptions: 'Link Cài Trực Tiếp Cập Nhật Ngày 28/07/2026'
    },{
        name: '<strong><em> MENU 8 Ball Pool IOS ✅</em></strong>',
        url: 'https://sub2s.com/1785066381',
        img: 'https://i.postimg.cc/Hxv3Pj2b/1783586272519-541494777965378080-584700966525922238-0b82b24f9f0cc544305843cc7a24dc0d.jpg',
        descriptions: 'Link Cài Trực Tiếp Cập Nhật Ngày 28/07/2026'
    },{
        name: '<strong><em> Proxy FF IOS ✅</em></strong>',
        url: 'https://sub2s.com/1780545960',
        img: 'https://i.postimg.cc/NfBCGPw3/1JSOL8E2V-AD5H4H.jpg',
        descriptions: 'Link Cài Trực Tiếp Cập Nhật Ngày 12/07/2026'
    },
];

const ksignApps = [
                                 
];

const esignApps = [
   
    
];

// UI COMPONENTS

const cloudIcon = `<svg class="icon" style="width: 24px;height: 24px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="739"><path d="M691.3 693.9c-24.7 0-44.8-20-44.8-44.8 0-24.7 20-44.8 44.8-44.8h40c190.6 0 176.8-274.4 0.2-268.1C671.2 37.2 208 145.1 299 445c-93-73.9-204.6 69.2-109.6 139.8 67.2 49.9 188.5-18.4 188.5 64.3 0 56.3-63.9 44.8-125.3 44.8-149.3 0-241.3-159.3-155.8-281.1 40.8-58.2 104.9-72.6 104.9-72.6C231.4 111.3 492.7-9.5 686.2 120c83.1 55.6 114.5 136.9 114.5 136.9 48.8 14.8 90.7 45.6 119.2 86.4 96 137.3 21.5 350.6-228.6 350.6zM514.2 335.8c0.2 0 0.3 0.1 0.5 0.1s0.3-0.1 0.5-0.1h-1z m177.1 421.1c0-17.5-45.8-17.3-63.3 0.1l-32.8 32.9c-14.1 14.1-38.2 4.2-38.2-15.8V380.6c0-24.5-17.9-44.4-42.3-44.7-24.5 0.3-47.2 20.1-47.2 44.7v393.5c0 19.9-24.1 29.9-38.2 15.8l-32.8-42.1c-17.5-17.5-45.3-9.3-62.8-9.3h-0.2c-17.5 44.8-17.6 55.1-0.1 72.6L449 931.5c35 35 91.6 37.3 126.6 2.3l115.7-114.6c17.5-17.5 0-45.2 0-62.7v0.4z" p-id="740"></path></svg>`;

// DOM ELEMENTS

const appContainer = document.querySelector('.app-section');
const ksignContainer = document.querySelector('.ksign-section');
const esignContainer = document.querySelector('.esign-section');

// UTILITY FUNCTIONS

function render(name, url, img, description) {
    return `<div class="app-container">
        <div class="app">
            <img src="${img}" class="app-img box-shadow" alt="${name}">
            <h1 style="margin-left: 1em">${name}<br>
                <p>${description}</p>
            </h1>
        </div>
        <i href="${url}" class="download-btn" style="color: #007aff;">
            ${cloudIcon}
        </i>
    </div>`;
}

function addClickHandler(container) {
    if (!container) return;
    
    container.addEventListener('click', (event) => {
        const target = event.target.closest('.app-container');
        if (target) {
            const url = target.querySelector('.download-btn').getAttribute('href');
            window.open(url, '_blank');
        }
    });
}

// INITIALIZATION

// Render apps in their respective containers
if (appContainer) {
    apps.forEach(app => {
        appContainer.innerHTML += render(app.name, app.url, app.img, app.descriptions);
    });
}

if (ksignContainer) {
    ksignApps.forEach(ksign => {
        ksignContainer.innerHTML += render(ksign.name, ksign.url, ksign.img, ksign.descriptions);
    });
}

if (esignContainer) {
    esignApps.forEach(esign => {
        esignContainer.innerHTML += render(esign.name, esign.url, esign.img, esign.descriptions);
    });
}

// Add click handlers to all containers
addClickHandler(appContainer);
addClickHandler(ksignContainer);
addClickHandler(esignContainer);
