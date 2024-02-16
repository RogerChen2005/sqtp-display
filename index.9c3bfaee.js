const heatmapData = [
    {
        "lng": 120.08926731029,
        "lat": 30.3032554653414,
        "count": 263
    },
    {
        "lng": 120.088500653241,
        "lat": 30.3026636110714,
        "count": 229
    },
    {
        "lng": 120.090009354893,
        "lat": 30.30362227005,
        "count": 130
    },
    {
        "lng": 120.091325191581,
        "lat": 30.3010586214479,
        "count": 5
    },
    {
        "lng": 120.083574971596,
        "lat": 30.3025666779356,
        "count": 132
    },
    {
        "lng": 120.086971871142,
        "lat": 30.2959927434171,
        "count": 273
    },
    {
        "lng": 120.087850604277,
        "lat": 30.2963707079977,
        "count": 294
    },
    {
        "lng": 120.084527315283,
        "lat": 30.2966775718647,
        "count": 23
    },
    {
        "lng": 120.090632987494,
        "lat": 30.2970126726438,
        "count": 284
    },
    {
        "lng": 120.091523480881,
        "lat": 30.2967903481151,
        "count": 241
    },
    {
        "lng": 120.089931356294,
        "lat": 30.2985807777726,
        "count": 274
    },
    {
        "lng": 120.091105599598,
        "lat": 30.298519508297,
        "count": 289
    },
    {
        "lng": 120.089993525612,
        "lat": 30.3044055231713,
        "count": 42
    },
    {
        "lng": 120.09088528503,
        "lat": 30.297428802197,
        "count": 295
    },
    {
        "lng": 120.082690204427,
        "lat": 30.2999043162018,
        "count": 278
    },
    {
        "lng": 120.082965758275,
        "lat": 30.2979930708041,
        "count": 210
    },
    {
        "lng": 120.083770361996,
        "lat": 30.2991926381275,
        "count": 247
    },
    {
        "lng": 120.083945823339,
        "lat": 30.3082190857748,
        "count": 57
    },
    {
        "lng": 120.084867296353,
        "lat": 30.3082480741075,
        "count": 245
    },
    {
        "lng": 120.081381496161,
        "lat": 30.3069788393356,
        "count": 223
    },
    {
        "lng": 120.081853564981,
        "lat": 30.3053393507661,
        "count": 227
    },
    {
        "lng": 120.083141025253,
        "lat": 30.3054227152526,
        "count": 158
    }
];
var map = new AMap.Map("heatmap", {
    resizeEnable: true,
    center: [
        120.0893,
        30.3033
    ],
    zoom: 16
});
if (!isSupportCanvas()) alert("\u70ED\u529B\u56FE\u4EC5\u5BF9\u652F\u6301canvas\u7684\u6D4F\u89C8\u5668\u9002\u7528,\u60A8\u6240\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\u4E0D\u80FD\u4F7F\u7528\u70ED\u529B\u56FE\u529F\u80FD,\u8BF7\u6362\u4E2A\u6D4F\u89C8\u5668\u8BD5\u8BD5~");
var heatmap;
map.plugin([
    "AMap.Heatmap"
], function() {
    heatmap = new AMap.Heatmap(map, {
        radius: 100,
        opacity: [
            0,
            0.6
        ],
        gradient: {
            0.5: "blue",
            0.65: "rgb(117,211,248)",
            0.7: "rgb(0, 255, 0)",
            0.9: "#ffea00",
            1.0: "red"
        }
    });
    heatmap.setDataSet({
        data: heatmapData,
        max: 300
    });
});
function isSupportCanvas() {
    var elem = document.createElement("canvas");
    return !!(elem.getContext && elem.getContext("2d"));
}

//# sourceMappingURL=index.9c3bfaee.js.map
