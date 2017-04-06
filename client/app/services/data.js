function dataSource() {

  const items = [
    {name: 'camera', img: 'app/images/items/camera.jpg'},
    {name: 'lens', img: 'app/images/items/lens.jpg'},
    {name: 'lighting', img: 'app/images/items/lighting.jpg'},
    {name: 'audio', img: 'app/images/items/audio.jpg'},
    {name: 'grip', img: 'app/images/items/grip.jpg'},
    {name: 'accessories', img: 'app/images/items/accessories.jpg'}
  ];

  const products = {

    camera: [
      {
        name: 'Blackmagic cinema camera',
        code: '#001',
        image: 'app/images/products/001.jpg',
        highlights: [
          '2.5K Image Sensor',
          '12-bit RAW, ProRes, and DNxHD Formats',
          '13 Stops of Dynamic Range',
          '23.98, 24, 25, 29.97, 30p Frame Rates',
          'Rolling Shutter',
          'Micro Four Thirds Lens Mount',
          'Metadata Entry',
          'Records to Removable SSD Drives'
        ],
        withHire: [
          'CAMERA CAGE WITH ROTATING TOP HANDLE',
          '2 x SANDISK EXTREME PRO SSD (240GB)',
          '1 x SWITRONIX PRO-X POWERBASE 70 (77WH)',
          'EXTERNAL 12VAC POWER SUPPLY'
        ]
      }
    ],

    lens: [
      {
        name: 'ROKINON CINE DS 16MM T2.2',
        code: '#002',
        image: 'app/images/products/002.jpg',
        highlights: [
          'For Micro Four Thirds Mount',
          'Covers APS-C Sensors',
          'Minimum Focus Distance 7.9”',
          'Dual Side Focus and T-Stop Scales',
          'Manual Focus and Aperture',
          'Accepts 77mm Threaded Filter Rings'
        ]
      },

      {
        name: 'ROKINON CINE DS 24MM T1.5',
        code: '#003',
        image: 'app/images/products/003.jpg',
        highlights: [
          'For Micro Four Thirds Mount',
          'Covers Full-Frame Sensors',
          'Minimum Focus Distance 9.8”',
          'Dual Side Focus and T-Stop Scales',
          'Manual Focus and Aperture',
          'Accepts 77mm Threaded Filter Rings'
        ]
      },

      {
        name: 'ROKINON CINE DS 135MM T2.2',
        code: '#004',
        image: 'app/images/products/004.jpg',
        highlights: [
          'For Micro Four Thirds Mount',
          'Covers Full-Frame Sensors',
          'Minimum Focus Distance 31”',
          'Dual Side Focus and T-Stop Scales',
          'Manual Focus and Aperture',
          'Accepts 77mm Threaded Filter Rings'
        ]
      },

      {
        name: 'HOYA UV & IR CUT FILTER',
        code: '#005',
        image: 'app/images/products/005.jpg',
        highlights: [
          '77mm Thread.',
          'Cuts Out UV Rays Below 390 nm',
          'Cuts Out IR Rays Above 700 mn',
          'Retains Visible Light Spectrum',
          'Reduce Effects of Atmospheric Haze',
          'Clearer and Sharper Pictures Outdoors'
        ]
      },

      {
        name: 'FOTODIX LENS MOUNT ADAPTER',
        code: '#006',
        image: 'app/images/products/006.jpg',
        highlights: [
          'Canon EOS Lens to MFT mount',
          'Guaranteed Infinity Focus'
        ]
      }
    ],

    lighting: [

      {
        name: 'APUTURE LS C120T LED LIGHT',
        code: '#007',
        image: 'app/images/products/007.jpg',
        highlights: [
          '3000K Color Temperature',
          'Accurate Color Rendering of 97+ CRI and 97+ TLCI',
          '10% to 100% Brightness',
          'Bowens Mount',
          '18db Quiet Fan',
          'Wired Remote Controller Box',
          'Wireless Remote with 328\' Range',
          'V-Mount Battery Plate',
        ],
        withHire: [
          'SIMPEX LIGHT STAND'
        ]
      },

      {
        name: 'IMPACT 5IN1 REFLECTOR',
        code: '#008',
        image: 'app/images/products/008.jpg',
        highlights: [
          '42”x72”',
					'Black, Silver, White, Soft-Gold, Translucent'
        ]
      }
    ],

    grip: [

      {
        name: 'MANFROTTO 190X LEG',
        code: '#009',
        image: 'app/images/products/009.jpg',
        highlights: [
          'Ultra-Low Shooting Positions',
          'Maximum Height 53.15”',
					'Minimum Height 3.54”'
        ]
      },

      {
        name: 'BENRO S8 PRO HEAD',
        code: '#010',
        image: 'app/images/products/010.jpg',
        highlights: [
          'Stepless Pan and Tilt Drag Adjustment with Lock',
          'Four-Step Counterbalance',
          '+90° to -70° Tilt / 360° Pan',
          'Right or Left Side Pan Bar Mounting',
          'Sliding Quick Release Plate'
        ]
      },

      {
        name: 'SHAPE BMCC SHOULDER RIG',
        code: '#011',
        image: 'app/images/products/011.jpg',
        highlights: [
          'Camera Cage with Rotating Top Handle',
          'Swing Away Matte Box with two 4”x4” Filter Tray',
          'Follow Focus',
          '1 Pair of 8” 15mm Rods',
          '1 Pair of 10” 15mm Rods',
          '1 Pair of 12” 15mm Rods',
          '1 Pair of 16” 15mm Rods',
          'Multi Purpose Mounting Cheese Plate',
          'Handle with 360° Rotation',
          'Padded Shoulder Pad'
        ]
      }
    ],

    audio: [

      {
        name: 'TASCAM DR-701D AUDIO RECORDER',
        code: '#012',
        image: 'app/images/products/012.jpg',
        highlights: [
          'Records Up to 24-Bit/192kHz',
          'Record 4 Channels + Stereo Mix',
          '4 XLR/TRS Inputs with Phantom Power',
          'Dual Built-In Omnidirectional Mics',
          'Stereo 3.5mm In for Stereo Mic',
          '3.5mm Camera In/Out',
        ],
        withHire: [
          'K-TEK KSTG70 STINGRAY BAG',
          '1 x SANDISK MEMORY CARD (32GB)',
          '4 x BATTERY'
        ]
      },

      {
        name: 'RODE NTG3 SHOTGUN MICROPHONE',
        code: '#013',
        image: 'app/images/products/013.jpg',
        highlights: [
          'Broadcast Sound Quality',
          'RF Rejection and Low Noise'
        ],
        withHire: [
          'RODE WS7 WINDSHIELD',
          'K-TEK KE-79CC BOOMPOLE (UPTO 6’7”)',
          'XLR CABLE (30’)'
        ]
      },

      {
        name: 'RODE STEREO VIDEOMIC PRO',
        code: '#014',
        image: 'app/images/products/014.jpg',
        highlights: [
          'XY Stereo Configuration',
          'Level Switch: -10 / 0 / +20 dB',
          'High-Pass Filter Switch: 75 Hz',
        ],
        withHire: [
          '2 x 9V BATTERY',
          'EXTENSION CABLE'
        ]
      },

      {
        name: 'RODE BLIMP & RYCOTE SHOCK MOUNT',
        code: '#015',
        image: 'app/images/products/015.jpg',
        highlights: [
          'Protection from Wind Noise',
          'Isolates from Shock and Vibration',
          'Integrated Mogami Mic Cable'
        ],
        withHire: [
          'DEAD WOMBAT WINDSHIELD'
        ]
      },

      {
        name: 'SONY MDR-7506 HEADPHONE',
        code: '#016',
        image: 'app/images/products/016.jpg',
        highlights: [
          '40mm Neodymium Drivers',
          'Closed Design Eliminates Headphone Bleed',
          'Coiled Cable'
        ]
      }
    ],

    accessories: [

      {
        name: 'SMALLHD 702 BRIGHT MONITOR',
        code: '#017',
        image: 'app/images/products/017.jpg',
        highlights: [
          '7” 1080p Display',
          'Daylight Viewable 1000 cd/m² Brightness',
          '100% Rec 709 Color Gamut',
          '24bit Color Depth',
          '1000:1 Contrast; 179° Viewing Angle',
          'Custom Luts, Anamorphic De-Squeeze',
          'Frame Guides, Focus Assist, Peaking, False Color, Zebra, Waveform, Vectorscope, RGB Parade, Histogram',
          'HD-SDI and HDMI Inputs and Outputs'
        ],
        withHire: [
          '1 x SANDISK MEMORY CARD (8GB)',
          '1 x SDI CABLE (21.5”)',
          '1 x SDI CABLE (9’)',
          '1 x ARTICULATING ARM',
          '4 x LP-E6 BATTERY'
        ]
      },

      {
        name: 'GODOX LP-800X PORTABLE BATTERY',
        code: '#018',
        image: 'app/images/products/018.jpg',
        highlights: [
          '750W Continuous Power'
        ]
      },

      {
        name: 'ALAN GORDON PRODUCTION SLATE',
        code: '#019',
        image: 'app/images/products/019.jpg',
        highlights: [
          'Magnetic Closure of Clap Sticks',
          'Engraved Lettering'
        ]
      }
    ]

  };


  return {
    items: items,
    products: products
  }
}

export default dataSource;
