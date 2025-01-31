var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var openMenu = document.getElementById("openMenu");
function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        console.log("Closing the sidebar...");
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && !openMenu.contains(event.target) || event.target.classList.contains('sidebar-list-item')) {
        console.log("Clicked outside of the sidebar.");
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
    console.log("Click event takes place...");
});



// -------------- CHARTS -----------------

var barChartOptions = {
    series: [{
        data: [10, 8, 6, 4, 2]
    }],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false
        },
    },
    colors: [
        "#246dec",
        "#cc3c43",
        "#367952",
        "#f5b74f",
        "#4f35a1"
    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%'
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
    },
    yaxis: {
        title: {
            text: "Count"
        }
    }
};


var barChart = new ApexCharts(document.querySelector('#bar-chart'), barChartOptions);
barChart.render();



// AREA CHART
var areaChartOptions = {
    series: [{
        name: 'Purchase Orders',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Sales Orders',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    colors: ["#4f35a1", "#246dec"],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
    markers: {
        size: 0
    },
    yaxis: [
        {
            title: {
                text: 'Purchase Orders',
            },
        },
        {
            opposite: true,
            title: {
                text: 'Sales Orders',
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();



const profileMenu = document.getElementById('profileMenu');
const profileBtn = document.getElementById('profileBtn');

document.addEventListener('click', function (event) {

    if (event.target.id === 'profileBtn') {
        profileMenu.classList.toggle('open-menu');
    }
    else if (!profileMenu.contains(event.target)) {
        profileMenu.classList.remove('open-menu');
    }
});

// ************************************* NOTIFICATION DROPDOWN START **********************************

const notificationMenu = document.getElementById('notificationMenu');
const notificationBtn = document.getElementById('notificationBtn');

document.addEventListener('click', function (event) {

    if (event.target.id === 'notificationBtn') {
        notificationMenu.classList.toggle('open-menu');
    }
    else if (!notificationMenu.contains(event.target)) {
        notificationMenu.classList.remove('open-menu');
    }
});

// ************************************* NOTIFICATION DROPDOWN END **********************************


// ************************************* MESSAGES DROPDOWN START **********************************

const messagesMenu = document.getElementById('messagesMenu');
const messagesBtn = document.getElementById('messagesBtn');

document.addEventListener('click', function (event) {

    if (event.target.id === 'messagesBtn') {
        messagesMenu.classList.toggle('open-menu');
    }
    else if (!notificationMenu.contains(event.target)) {
        messagesMenu.classList.remove('open-menu');
    }
});

// ************************************* MESSAGES DROPDOWN START **********************************