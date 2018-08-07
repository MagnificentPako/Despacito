const random = (t) => {
    return t[Math.floor((Math.random()*t.length))]
}

const despacitoes = [ "8geg0I9LpHM"
                    , "zR4GkZcPF_o"
                    , "j41KZSMHpgA"
                    , "lHQkaymgg7s"
                    , "hcQyFtHMfbs"
                    , "sc6qX5gvkH4"
                    , "iPa-8pyTn58"
                    , "GxY4QR172qY"
                    , "_wRoLPNxKMg"
                    , "y36IRLQclnQ"
                    , "SoTKOaQdDI0"
                    , "02F7IJNYGFs"
                    , "wm4LePocfo0"
                    , "HiRDPM2mOQI"
                    ]

module.exports = () => {
    return random(despacitoes)
}