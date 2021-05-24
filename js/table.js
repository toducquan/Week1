var data =[
    {
        "Store": "Tottal",
        "Create": "",
        "Current": "",
        "Number": "255",
        "Total":"$155,830.00"
    },{
        "Store": "Emerald Silk Gown",
        "Create": "$875.00",
        "Current": "124689",
        "Number": "140",
        "Total":"$122,500.00"
    },
    {
        "Store": "Mauve Cashmere Scarf",
        "Create": "$230.00",
        "Current": "124533",
        "Number": "83",
        "Total":"$19,090.00"
    },
    {
        "Store": "Navy Merino Wool",
        "Create": "$445.00",
        "Current": "124518",
        "Number": "32",
        "Total":"$14,240.00"
    }
]

$.each(data, function(index, item){
    var tr = `<tr class="detail">
                <td style="text-align: left;">${item.Store}</td>
                <td>${item.Create}</td>
                <td>${item.Current}</td>
                <td>${item.Number}</td>
                <td>${item.Total}</td>
            </tr>`
    $('#table').append(tr)
})

var data2 = [
    {
        "Store": "Total",
        "Create": "",
        "Event": "",
        "Number": "255",
        "Total":"$155,830.00"
    },
    {
        "Store": "10000",
        "Create": "875.00",
        "Event": "Update plan",
        "Number": "140",
        "Total":"$122,500.00"
    },
    {
        "Store": "10000",
        "Create": "875.00",
        "Event": "Update plan",
        "Number": "140",
        "Total":"$122,500.00"
    },
    {
        "Store": "10000",
        "Create": "875.00",
        "Event": "Update plan",
        "Number": "140",
        "Total":"$122,500.00"
    },
    {
        "Store": "10000",
        "Create": "875.00",
        "Event": "Update plan",
        "Number": "140",
        "Total":"$122,500.00"
    },
    {
        "Store": "10000",
        "Create": "875.00",
        "Event": "Update plan",
        "Number": "140",
        "Total":"$122,500.00"
    },
    {
        "Store": "10000",
        "Create": "875.00",
        "Event": "Update plan",
        "Number": "140",
        "Total":"$122,500.00"
    },
    {
        "Store": "10000",
        "Create": "875.00",
        "Event": "Update plan",
        "Number": "140",
        "Total":"$122,500.00"
    },
    {
        "Store": "10000",
        "Create": "875.00",
        "Event": "Update plan",
        "Number": "140",
        "Total":"$122,500.00"
    },
    {
        "Store": "10000",
        "Create": "875.00",
        "Event": "Update plan",
        "Number": "140",
        "Total":"$122,500.00"
    }
]
$.each(data2, function(index, item){
    var tr = `<tr style="height: 50px;">
                <td style="text-align: left;">${item.Store}</td>
                <td>${item.Create}</td>
                <td>${item.Event}</td>
                <td>${item.Number}</td>
                <td>${item.Total}</td>
            </tr>`
    $('#model-table').append(tr)
})

$('.detail').click(function(event){
    $('.login').addClass('none')
    $('.modal').removeClass('none')
    $('.model-load').fadeOut(3000)
})

$('.exit').click(function(event){
    $('.modal').addClass('none')
    $('.login').removeClass('none')
})
