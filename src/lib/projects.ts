export interface Project {
  name: string;
  slug: string;
  categorySlug: string;
  thumbnail: string;
  images: string[];
}

export interface Category {
  name: string;
  slug: string;
  projects: Project[];
}

export const categories: Category[] = [
  {
    name: "Cannabis Stores",
    slug: "cannabis-stores",
    projects: [
      {
        name: "Euphoria Vapes Cigars And Bongs",
        slug: "euphoria-vapes-cigars-and-bongs",
        categorySlug: "cannabis-stores",
        thumbnail: "/images/projects/cannabis-stores/euphoria-vapes-cigars-and-bongs/Ephoria%201-2023-01-29.jpg",
        images: [
          "/images/projects/cannabis-stores/euphoria-vapes-cigars-and-bongs/Ephoria%201-2023-01-29.jpg",
          "/images/projects/cannabis-stores/euphoria-vapes-cigars-and-bongs/Ephoria%202-2023-01-29.jpg",
          "/images/projects/cannabis-stores/euphoria-vapes-cigars-and-bongs/Ephoria%202023-01-29.jpg",
          "/images/projects/cannabis-stores/euphoria-vapes-cigars-and-bongs/Ephoria%202023-01-291.jpg",
          "/images/projects/cannabis-stores/euphoria-vapes-cigars-and-bongs/Ephoria%202023-02-04.jpg",
          "/images/projects/cannabis-stores/euphoria-vapes-cigars-and-bongs/Ephoria%203-2023-01-29.jpg",
        ],
      },
      {
        name: "Good Roots Cannabis Store",
        slug: "good-roots-cannabis-store",
        categorySlug: "cannabis-stores",
        thumbnail: "/images/projects/cannabis-stores/good-roots-cannabis-store/Cannabis%20Good%20roots%202019-10-20.jpg",
        images: [
          "/images/projects/cannabis-stores/good-roots-cannabis-store/Cannabis%20Good%20roots%202019-10-20.jpg",
          "/images/projects/cannabis-stores/good-roots-cannabis-store/Cannabis%20Good%20roots%202021-05-14.jpg",
          "/images/projects/cannabis-stores/good-roots-cannabis-store/Cannabis%20Good%20roots%20IMG_20200505_161102.jpg",
          "/images/projects/cannabis-stores/good-roots-cannabis-store/Cannabis%20Good%20roots%20IMG_2428.jpg",
          "/images/projects/cannabis-stores/good-roots-cannabis-store/Cannabis%20Good%20roots%20IMG_2435.jpg",
        ],
      },
      {
        name: "Moksha Cannabis Store",
        slug: "moksha-cannabis-store",
        categorySlug: "cannabis-stores",
        thumbnail: "/images/projects/cannabis-stores/moksha-cannabis-store/Moksha%20Cannabis%202021-07-23.jpg",
        images: [
          "/images/projects/cannabis-stores/moksha-cannabis-store/Moksha%20Cannabis%202021-07-23.jpg",
          "/images/projects/cannabis-stores/moksha-cannabis-store/Moksha%20Cannabis%202021-09-07.jpg",
          "/images/projects/cannabis-stores/moksha-cannabis-store/Moksha%20Cannabis%202021-12-10.jpg",
          "/images/projects/cannabis-stores/moksha-cannabis-store/Moksha%20Cannabis%202022-01-21.jpg",
          "/images/projects/cannabis-stores/moksha-cannabis-store/Moksha%20Cannabis%202022-02-26.jpg",
        ],
      },
      {
        name: "Mountain Standard Cannabis Store",
        slug: "mountain-standard-cannabis-store",
        categorySlug: "cannabis-stores",
        thumbnail: "/images/projects/cannabis-stores/mountain-standard-cannabis-store/Mountain%20Standard%20Cannabis%202021-05-14.jpg",
        images: [
          "/images/projects/cannabis-stores/mountain-standard-cannabis-store/Mountain%20Standard%20Cannabis%202021-05-14.jpg",
          "/images/projects/cannabis-stores/mountain-standard-cannabis-store/Mountain%20Standard%20Cannabis%20IMG_0789_edited.jpg",
          "/images/projects/cannabis-stores/mountain-standard-cannabis-store/Mountain%20Standard%20Cannabis%20IMG_0790_edited.jpg",
          "/images/projects/cannabis-stores/mountain-standard-cannabis-store/Mountain%20Standard%20Cannabis%20IMG_0805_edited.jpg",
          "/images/projects/cannabis-stores/mountain-standard-cannabis-store/Mountain%20Standard%20Cannabis%20IMG_0810_edited.jpg",
        ],
      },
      {
        name: "Numo Cannabis Store",
        slug: "numo-cannabis-store",
        categorySlug: "cannabis-stores",
        thumbnail: "/images/projects/cannabis-stores/numo-cannabis-store/NUMO%20Cannabis%202023-01-18.jpg",
        images: [
          "/images/projects/cannabis-stores/numo-cannabis-store/NUMO%20Cannabis%202023-01-18.jpg",
          "/images/projects/cannabis-stores/numo-cannabis-store/NUMO%20Cannabis%20WhatsApp%20Image%202019-01-16%20at%206.50.50%20PM.jpeg",
          "/images/projects/cannabis-stores/numo-cannabis-store/NUMO%20Cannabis%20_DSC1509.jpg",
          "/images/projects/cannabis-stores/numo-cannabis-store/NUMO%20Cannabis%20_DSC1520.jpg",
        ],
      },
    ],
  },

  {
    name: "Commercial",
    slug: "commercial",
    projects: [
      {
        name: "Devraj Commercial",
        slug: "devraj-commercial",
        categorySlug: "commercial",
        thumbnail: "/images/projects/commercial/devraj-commercial/100-0003_IMG.JPG",
        images: [
          "/images/projects/commercial/devraj-commercial/100-0003_IMG.JPG",
          "/images/projects/commercial/devraj-commercial/100-0004_IMG.JPG",
          "/images/projects/commercial/devraj-commercial/100-0005_IMG.JPG",
        ],
      },
      {
        name: "Modular Office",
        slug: "modular-office",
        categorySlug: "commercial",
        thumbnail: "/images/projects/commercial/modular-office/Modular%20office%20IMG_0415.JPG",
        images: [
          "/images/projects/commercial/modular-office/Modular%20office%20IMG_0415.JPG",
          "/images/projects/commercial/modular-office/Modular%20office%20IMG_20220903_122401.jpg",
        ],
      },
      {
        name: "Seaman Stadium",
        slug: "seaman-stadium",
        categorySlug: "commercial",
        thumbnail: "/images/projects/commercial/seaman-stadium/Seaman%20Stadium%20%28DAY%29%2B%2BLOCATION%2BA%2B-%2BFRONT%2BEXT%2BPERSPECTIVE%2BSW%2B1.png",
        images: [
          "/images/projects/commercial/seaman-stadium/Seaman%20Stadium%20%28DAY%29%2B%2BLOCATION%2BA%2B-%2BFRONT%2BEXT%2BPERSPECTIVE%2BSW%2B1.png",
          "/images/projects/commercial/seaman-stadium/Seaman%20Stadium%20%28NIGHT%29%2B%2BLOCATION%2BA%2B-%2BFRONT%2BEXT%2BPERSPECTIVE%2BSW%2B1.png",
          "/images/projects/commercial/seaman-stadium/Seaman%20Stadium%20CONCESSION%2BIMAGE%2BCOMPOSITE%2B-%2BVIEW%2B2.png",
          "/images/projects/commercial/seaman-stadium/Seaman%20Stadium%20CONCESSION%2BIMAGE%2BCOMPOSITE.png",
          "/images/projects/commercial/seaman-stadium/Seaman%20stadium%20Picture1.png",
          "/images/projects/commercial/seaman-stadium/Seaman%20stadium%20Picture2.png",
          "/images/projects/commercial/seaman-stadium/Seaman%20stadium%20Picture3.png",
        ],
      },
      {
        name: "Seven Seas Mall",
        slug: "seven-seas-mall",
        categorySlug: "commercial",
        thumbnail: "/images/projects/commercial/seven-seas-mall/Seven%20Seas%20Picture1.jpg",
        images: [
          "/images/projects/commercial/seven-seas-mall/Seven%20Seas%20Picture1.jpg",
          "/images/projects/commercial/seven-seas-mall/Seven%20Seas%20Picture2.jpg",
          "/images/projects/commercial/seven-seas-mall/Seven%20Seas%20Picture3.jpg",
        ],
      },
      {
        name: "Silver Rock Commercial",
        slug: "silver-rock-commercial",
        categorySlug: "commercial",
        thumbnail: "/images/projects/commercial/silver-rock-commercial/BRO_NIGHT_VIEW.jpg",
        images: [
          "/images/projects/commercial/silver-rock-commercial/BRO_NIGHT_VIEW.jpg",
          "/images/projects/commercial/silver-rock-commercial/DAIRY_SIDE_BIRDEYE.jpg",
          "/images/projects/commercial/silver-rock-commercial/DAIRY_SIDE_HUMAN.jpg",
          "/images/projects/commercial/silver-rock-commercial/FRONT_VIEW.jpg",
          "/images/projects/commercial/silver-rock-commercial/LALBAUG_BIRDEYE.jpg",
          "/images/projects/commercial/silver-rock-commercial/LALBAUG_HUMAN.jpg",
          "/images/projects/commercial/silver-rock-commercial/Silver%20Rock%20Picture1.jpg",
          "/images/projects/commercial/silver-rock-commercial/Silver%20Rock%20Picture2.jpg",
        ],
      },
      {
        name: "Super Bazar Commercial",
        slug: "super-bazar-commercial",
        categorySlug: "commercial",
        thumbnail: "/images/projects/commercial/super-bazar-commercial/Super%20Bazar%20Picture1.jpg",
        images: [
          "/images/projects/commercial/super-bazar-commercial/Super%20Bazar%20Picture1.jpg",
        ],
      },
      {
        name: "Tennis Court Facility",
        slug: "tennis-court-facility",
        categorySlug: "commercial",
        thumbnail: "/images/projects/commercial/tennis-court-facility/Bradon%20Tennis%20Court%20Picture1.png",
        images: [
          "/images/projects/commercial/tennis-court-facility/Bradon%20Tennis%20Court%20Picture1.png",
        ],
      },
    ],
  },

  {
    name: "Convenience Store",
    slug: "convinience-store",
    projects: [
      {
        name: "Fashion Addition",
        slug: "fashion-addition",
        categorySlug: "convinience-store",
        thumbnail: "/images/projects/convinience-store/fashion-addition/Capture.PNG",
        images: [
          "/images/projects/convinience-store/fashion-addition/Capture.PNG",
          "/images/projects/convinience-store/fashion-addition/Fashion%20Addition.PNG",
        ],
      },
      {
        name: "Khalid Halal Meat Shop",
        slug: "khalid-halal-meat-shop",
        categorySlug: "convinience-store",
        thumbnail: "/images/projects/convinience-store/khalid-halal-meat-shop/Khalid%20Halal%20Meat%20shop%202021-06-03.jpg",
        images: [
          "/images/projects/convinience-store/khalid-halal-meat-shop/Khalid%20Halal%20Meat%20shop%202021-06-03.jpg",
          "/images/projects/convinience-store/khalid-halal-meat-shop/Khalid%20Halal%20Meat%20shop%202021-06-031.jpg",
          "/images/projects/convinience-store/khalid-halal-meat-shop/Khalid%20Halal%20Meat%20shop%2020210304_212127.jpg",
          "/images/projects/convinience-store/khalid-halal-meat-shop/Khalid%20Halal%20Meat%20shop%2020210307_092053.jpg",
        ],
      },
      {
        name: "Springhill Corner Store",
        slug: "springhill-corner-store",
        categorySlug: "convinience-store",
        thumbnail: "/images/projects/convinience-store/springhill-corner-store/1.PNG",
        images: [
          "/images/projects/convinience-store/springhill-corner-store/1.PNG",
          "/images/projects/convinience-store/springhill-corner-store/2.PNG",
          "/images/projects/convinience-store/springhill-corner-store/4.PNG",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%2020211106_123841.jpg",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%2020211106_123850.jpg",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%2020211106_123911.jpg",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%2020211106_123915.jpg",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%2020211106_123954.jpg",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%2020211106_124006.jpg",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%2020211106_124009.jpg",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%2020211106_124013.jpg",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%2020211106_124055.jpg",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%2020211106_124103.jpg",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%204.PNG",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%205.PNG",
          "/images/projects/convinience-store/springhill-corner-store/Cocharane%206.PNG",
        ],
      },
    ],
  },

  {
    name: "Hospitality",
    slug: "hospitality",
    projects: [
      {
        name: "Casa Catrina Restaurant",
        slug: "casa-catrina-restaurant",
        categorySlug: "hospitality",
        thumbnail: "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Catrina%202022-07-24.jpg",
        images: [
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Catrina%202022-07-24.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Catrina%202022-07-241.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Catrina%202022-11-12.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Catrina%2020220623_202533.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Catrina%202023-01-28.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Ctrina%202022-07-30.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Ctrina%202022-08-06.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Ctrina%202022-08-27.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Ctrina%202022-09-01.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Ctrina%202022-10-19.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Ctrina%202023-01-28.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Ctrina%202023-01-281.jpg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Ctrina%20EE00A3BF-9D7D-41C8-BF4E-D76DFFA70152.jpeg",
          "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Ctrina%20PXL_20230105_031201754.jpg",
        ],
      },
      {
        name: "Gateway Hotel",
        slug: "gateway-hotel",
        categorySlug: "hospitality",
        thumbnail: "/images/projects/hospitality/gateway-hotel/Gateway%20Hotel%20Picture1.jpg",
        images: [
          "/images/projects/hospitality/gateway-hotel/Gateway%20Hotel%20Picture1.jpg",
          "/images/projects/hospitality/gateway-hotel/Gateway%20Hotel%20Picture2.jpg",
          "/images/projects/hospitality/gateway-hotel/Gateway%20Hotel%20Picture3.jpg",
          "/images/projects/hospitality/gateway-hotel/Gateway%20Hotel%20Picture4.jpg",
        ],
      },
      {
        name: "Jjs Neighbourhood Pub",
        slug: "jjs-neighbourhood-pub",
        categorySlug: "hospitality",
        thumbnail: "/images/projects/hospitality/jjs-neighbourhood-pub/JJ%27s%20Pub%2020210519_185839.jpg",
        images: [
          "/images/projects/hospitality/jjs-neighbourhood-pub/JJ%27s%20Pub%2020210519_185839.jpg",
          "/images/projects/hospitality/jjs-neighbourhood-pub/JJ%27s%20Pub%2020210520_184527.jpg",
          "/images/projects/hospitality/jjs-neighbourhood-pub/JJ%27s%20Pub%2020210520_184531.jpg",
          "/images/projects/hospitality/jjs-neighbourhood-pub/JJ%27s%20Pub%2020210520_184549.jpg",
          "/images/projects/hospitality/jjs-neighbourhood-pub/JJ%27s%20Pub%2020210520_184552.jpg",
        ],
      },
      {
        name: "Oak Tree Tavern",
        slug: "oak-tree-tavern",
        categorySlug: "hospitality",
        thumbnail: "/images/projects/hospitality/oak-tree-tavern/Oak%20Tree%20Tavern%202016-02-08.jpg",
        images: [
          "/images/projects/hospitality/oak-tree-tavern/Oak%20Tree%20Tavern%202016-02-08.jpg",
          "/images/projects/hospitality/oak-tree-tavern/Oak%20Tree%20Tavern%202016-04-07.jpg",
          "/images/projects/hospitality/oak-tree-tavern/Oak%20Tree%20Tavern%2020170831_123411.jpg",
          "/images/projects/hospitality/oak-tree-tavern/Oak%20Tree%20Tavern%202018-10-06.jpg",
          "/images/projects/hospitality/oak-tree-tavern/Oak%20Tree%20Tavern%202019-01-09.jpg",
          "/images/projects/hospitality/oak-tree-tavern/Oak%20Tree%20Tavern%202019-04-07.jpg",
          "/images/projects/hospitality/oak-tree-tavern/Oak%20Tree%20Tavern%202019-04-071.jpg",
          "/images/projects/hospitality/oak-tree-tavern/Oak%20Tree%20Tavern%202019-04-072.jpg",
        ],
      },
      {
        name: "Royal Pizza",
        slug: "royal-pizza",
        categorySlug: "hospitality",
        thumbnail: "/images/projects/hospitality/royal-pizza/Royal%20Pizza%202022-02-23.jpg",
        images: [
          "/images/projects/hospitality/royal-pizza/Royal%20Pizza%202022-02-23.jpg",
          "/images/projects/hospitality/royal-pizza/Royal%20Pizza%205A4D0BE6-16C6-49AC-81AB-798F24A3D3E9.jpeg",
          "/images/projects/hospitality/royal-pizza/Royal%20Pizza%2061E76E87-1588-460B-ACF0-1D49F26582B3.jpeg",
          "/images/projects/hospitality/royal-pizza/Royal%20Pizza%20654F7ED6-7330-4C2C-A05B-BD33DCA83F73.jpeg",
          "/images/projects/hospitality/royal-pizza/Royal%20Pizza%2078651E12-5519-459A-8123-6326F5538816.jpeg",
          "/images/projects/hospitality/royal-pizza/Royal%20Pizza%20D85336AF-149A-40BB-A448-452E7DBDC497.jpeg",
        ],
      },
      {
        name: "Saucy Burger",
        slug: "saucy-burger",
        categorySlug: "hospitality",
        thumbnail: "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202021-07-01.jpg",
        images: [
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202021-07-01.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202021-07-25.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202021-08-27.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202021-09-09.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202022-01-24.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202022-03-08.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202022-03-082.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202022-03-083.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202022-03-084.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202022-10-01.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%202022-10-011.jpg",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%20DSC01354.JPG",
          "/images/projects/hospitality/saucy-burger/Saucy%20Burger%20IMG_20210711_103150.jpg",
        ],
      },
    ],
  },

  {
    name: "Industrial",
    slug: "industrial",
    projects: [
      {
        name: "Evraz Industrial",
        slug: "evraz-industrial",
        categorySlug: "industrial",
        thumbnail: "/images/projects/industrial/evraz-industrial/Evraz%20Picture1.png",
        images: [
          "/images/projects/industrial/evraz-industrial/Evraz%20Picture1.png",
          "/images/projects/industrial/evraz-industrial/Evraz%20Picture2.png",
          "/images/projects/industrial/evraz-industrial/Evraz%20Picture3.png",
          "/images/projects/industrial/evraz-industrial/Evraz%20Picture4.png",
          "/images/projects/industrial/evraz-industrial/Evraz%20Picture5.png",
        ],
      },
      {
        name: "Hobo Brewery",
        slug: "hobo-brewery",
        categorySlug: "industrial",
        thumbnail: "/images/projects/industrial/hobo-brewery/1.PNG",
        images: [
          "/images/projects/industrial/hobo-brewery/1.PNG",
          "/images/projects/industrial/hobo-brewery/2.PNG",
          "/images/projects/industrial/hobo-brewery/4.PNG",
          "/images/projects/industrial/hobo-brewery/5.PNG",
          "/images/projects/industrial/hobo-brewery/6.PNG",
          "/images/projects/industrial/hobo-brewery/8.PNG",
        ],
      },
      {
        name: "Integra Industrial",
        slug: "integra-industrial",
        categorySlug: "industrial",
        thumbnail: "/images/projects/industrial/integra-industrial/Integra%20Picture1.jpg",
        images: [
          "/images/projects/industrial/integra-industrial/Integra%20Picture1.jpg",
          "/images/projects/industrial/integra-industrial/Sketch.PNG",
        ],
      },
      {
        name: "Norwood",
        slug: "norwood",
        categorySlug: "industrial",
        thumbnail: "/images/projects/industrial/norwood/1.PNG",
        images: [
          "/images/projects/industrial/norwood/1.PNG",
          "/images/projects/industrial/norwood/2.PNG",
          "/images/projects/industrial/norwood/3.PNG",
          "/images/projects/industrial/norwood/4.PNG",
          "/images/projects/industrial/norwood/5.PNG",
        ],
      },
      {
        name: "Spectrum Equipment",
        slug: "spectrum-equipment",
        categorySlug: "industrial",
        thumbnail: "/images/projects/industrial/spectrum-equipment/1.jpg",
        images: [
          "/images/projects/industrial/spectrum-equipment/1.jpg",
          "/images/projects/industrial/spectrum-equipment/2.jpg",
          "/images/projects/industrial/spectrum-equipment/3.jpg",
          "/images/projects/industrial/spectrum-equipment/4.jpg",
          "/images/projects/industrial/spectrum-equipment/5.jpg",
        ],
      },
      {
        name: "Sureway Metal System",
        slug: "sureway-metal-system",
        categorySlug: "industrial",
        thumbnail: "/images/projects/industrial/sureway-metal-system/130416%20VK_1.jpg",
        images: [
          "/images/projects/industrial/sureway-metal-system/130416%20VK_1.jpg",
          "/images/projects/industrial/sureway-metal-system/130416%20VK_2.jpg",
          "/images/projects/industrial/sureway-metal-system/130416%20VK_3.jpg",
          "/images/projects/industrial/sureway-metal-system/130416%20VK_4.jpg",
          "/images/projects/industrial/sureway-metal-system/130416%20VK_5.jpg",
          "/images/projects/industrial/sureway-metal-system/130416%20VK_6.jpg",
          "/images/projects/industrial/sureway-metal-system/130416%20VK_7.jpg",
        ],
      },
      {
        name: "Uls Industrial",
        slug: "uls-industrial",
        categorySlug: "industrial",
        thumbnail: "/images/projects/industrial/uls-industrial/LOT-18_2.jpg",
        images: [
          "/images/projects/industrial/uls-industrial/LOT-18_2.jpg",
          "/images/projects/industrial/uls-industrial/LOT-18_4.jpg",
        ],
      },
      {
        name: "Warehouse",
        slug: "warehouse",
        categorySlug: "industrial",
        thumbnail: "/images/projects/industrial/warehouse/Warehouse%20Picture1.png",
        images: [
          "/images/projects/industrial/warehouse/Warehouse%20Picture1.png",
          "/images/projects/industrial/warehouse/Warehouse%20Picture2.png",
          "/images/projects/industrial/warehouse/Warehouse%20Picture3.png",
        ],
      },
    ],
  },

  {
    name: "Institutional",
    slug: "institutional",
    projects: [
      {
        name: "Code Ninja   Okotoks",
        slug: "code-ninja---okotoks",
        categorySlug: "institutional",
        thumbnail: "/images/projects/institutional/code-ninja---okotoks/Code%20Ninja%20-1.PNG",
        images: [
          "/images/projects/institutional/code-ninja---okotoks/Code%20Ninja%20-1.PNG",
          "/images/projects/institutional/code-ninja---okotoks/Code%20Ninja%20-2.PNG",
          "/images/projects/institutional/code-ninja---okotoks/Code%20Ninja%20021221-codeninjas002-1024x683.jpg",
          "/images/projects/institutional/code-ninja---okotoks/Code%20Ninja%20810x460-1.jpg",
          "/images/projects/institutional/code-ninja---okotoks/Code%20Ninja%20Alexandria2-1024x768.jpg",
          "/images/projects/institutional/code-ninja---okotoks/Code%20Ninja%20Code-Ninja-DoJo-Room.jpg",
          "/images/projects/institutional/code-ninja---okotoks/Code%20Ninja%20images.jpg",
          "/images/projects/institutional/code-ninja---okotoks/Code%20Ninja%20lobby-2.jpg",
        ],
      },
      {
        name: "Kids World Children Daycare",
        slug: "kids-world-children-daycare",
        categorySlug: "institutional",
        thumbnail: "/images/projects/institutional/kids-world-children-daycare/Daycare%2020200930_110753.jpg",
        images: [
          "/images/projects/institutional/kids-world-children-daycare/Daycare%2020200930_110753.jpg",
          "/images/projects/institutional/kids-world-children-daycare/Daycare%2020200930_110756.jpg",
          "/images/projects/institutional/kids-world-children-daycare/Daycare%2020200930_110759.jpg",
          "/images/projects/institutional/kids-world-children-daycare/Daycare%2020200930_110805.jpg",
          "/images/projects/institutional/kids-world-children-daycare/Daycare%2020200930_110818.jpg",
          "/images/projects/institutional/kids-world-children-daycare/Daycare%2020200930_110859.jpg",
          "/images/projects/institutional/kids-world-children-daycare/Daycare-1.PNG",
        ],
      },
    ],
  },

  {
    name: "Multi-Family",
    slug: "multi-family",
    projects: [
      {
        name: "Bergen Multi Family",
        slug: "bergen-multi-family",
        categorySlug: "multi-family",
        thumbnail: "/images/projects/multi-family/bergen-multi-family/Bergen%202018.06.13%2B-%2BEXT%2BNORTHEAST.jpg",
        images: [
          "/images/projects/multi-family/bergen-multi-family/Bergen%202018.06.13%2B-%2BEXT%2BNORTHEAST.jpg",
          "/images/projects/multi-family/bergen-multi-family/Bergen%20Picture2.png",
          "/images/projects/multi-family/bergen-multi-family/Bergen%20Picture3.png",
          "/images/projects/multi-family/bergen-multi-family/Bergen%20Picture4.png",
          "/images/projects/multi-family/bergen-multi-family/Bergen%20Picture5.png",
          "/images/projects/multi-family/bergen-multi-family/BergenPicture1.png",
        ],
      },
      {
        name: "Confederation Park Townhouses",
        slug: "confederation-park-townhouses",
        categorySlug: "multi-family",
        thumbnail: "/images/projects/multi-family/confederation-park-townhouses/Confederation%20park%20Picture1.png",
        images: [
          "/images/projects/multi-family/confederation-park-townhouses/Confederation%20park%20Picture1.png",
          "/images/projects/multi-family/confederation-park-townhouses/ConfederationPark2.jpg",
          "/images/projects/multi-family/confederation-park-townhouses/ConfederationPark3.jpg",
        ],
      },
      {
        name: "Cunnigham Multi Family",
        slug: "cunnigham-multi-family",
        categorySlug: "multi-family",
        thumbnail: "/images/projects/multi-family/cunnigham-multi-family/Cunningham%20Picture1.png",
        images: [
          "/images/projects/multi-family/cunnigham-multi-family/Cunningham%20Picture1.png",
          "/images/projects/multi-family/cunnigham-multi-family/Cunningham%20Picture2.png",
          "/images/projects/multi-family/cunnigham-multi-family/Cunningham%20Picture3.png",
          "/images/projects/multi-family/cunnigham-multi-family/Cunningham%20Picture4.png",
        ],
      },
      {
        name: "New Age Multi Family",
        slug: "new-age-multi-family",
        categorySlug: "multi-family",
        thumbnail: "/images/projects/multi-family/new-age-multi-family/New%20Age%20Picture1.jpg",
        images: [
          "/images/projects/multi-family/new-age-multi-family/New%20Age%20Picture1.jpg",
          "/images/projects/multi-family/new-age-multi-family/New%20Age%20Picture2.jpg",
          "/images/projects/multi-family/new-age-multi-family/New%20Age%20Picture3.jpg",
        ],
      },
      {
        name: "North Glenmore Park Townhouse",
        slug: "north-glenmore-park-townhouse",
        categorySlug: "multi-family",
        thumbnail: "/images/projects/multi-family/north-glenmore-park-townhouse/Glenmore%20Townhouse%20Picture1.png",
        images: [
          "/images/projects/multi-family/north-glenmore-park-townhouse/Glenmore%20Townhouse%20Picture1.png",
          "/images/projects/multi-family/north-glenmore-park-townhouse/Glenmore%20Townhouse%20Picture2.png",
          "/images/projects/multi-family/north-glenmore-park-townhouse/Glenmore%20Townhouse%20Picture3.png",
          "/images/projects/multi-family/north-glenmore-park-townhouse/Glenmore%20Townhouse%20Picture4.png",
        ],
      },
      {
        name: "Riverway Townhouses",
        slug: "riverway-townhouses",
        categorySlug: "multi-family",
        thumbnail: "/images/projects/multi-family/riverway-townhouses/Riverway%20Picture1.jpg",
        images: [
          "/images/projects/multi-family/riverway-townhouses/Riverway%20Picture1.jpg",
          "/images/projects/multi-family/riverway-townhouses/Riverway%20Picture2.jpg",
          "/images/projects/multi-family/riverway-townhouses/Riverway%20Picture3.jpg",
          "/images/projects/multi-family/riverway-townhouses/Riverway%20Picture4.jpg",
          "/images/projects/multi-family/riverway-townhouses/Riverway%20Picture5.jpg",
          "/images/projects/multi-family/riverway-townhouses/Riverway%20Picture6.jpg",
        ],
      },
      {
        name: "Sanket Commercial",
        slug: "sanket-commercial",
        categorySlug: "multi-family",
        thumbnail: "/images/projects/multi-family/sanket-commercial/Signature1.jpg",
        images: [
          "/images/projects/multi-family/sanket-commercial/Signature1.jpg",
        ],
      },
      {
        name: "Vatika Multi Family",
        slug: "vatika-multi-family",
        categorySlug: "multi-family",
        thumbnail: "/images/projects/multi-family/vatika-multi-family/Vatika%20Picture1.jpg",
        images: [
          "/images/projects/multi-family/vatika-multi-family/Vatika%20Picture1.jpg",
          "/images/projects/multi-family/vatika-multi-family/Vatika%20Picture2.jpg",
        ],
      },
      {
        name: "Wolfden Multi Family",
        slug: "wolfden-multi-family",
        categorySlug: "multi-family",
        thumbnail: "/images/projects/multi-family/wolfden-multi-family/Wolfden%20Picture0.jpg",
        images: [
          "/images/projects/multi-family/wolfden-multi-family/Wolfden%20Picture0.jpg",
          "/images/projects/multi-family/wolfden-multi-family/Wolfden%20Picture00.jpg",
          "/images/projects/multi-family/wolfden-multi-family/Wolfden%20Picture1.png",
          "/images/projects/multi-family/wolfden-multi-family/Wolfden%20Picture2.png",
          "/images/projects/multi-family/wolfden-multi-family/Wolfden%20Picture3.png",
          "/images/projects/multi-family/wolfden-multi-family/Wolfden%20Picture4.png",
        ],
      },
    ],
  },

  {
    name: "Residential",
    slug: "residential",
    projects: [
      {
        name: "Dhiraj House",
        slug: "dhiraj-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/dhiraj-house/KHANDELWAL%20%281%29.jpg",
        images: [
          "/images/projects/residential/dhiraj-house/KHANDELWAL%20%281%29.jpg",
          "/images/projects/residential/dhiraj-house/KHANDELWAL%20%282%29.jpg",
          "/images/projects/residential/dhiraj-house/KHANDELWAL%20%283%29.jpg",
          "/images/projects/residential/dhiraj-house/KHANDELWAL.jpg",
          "/images/projects/residential/dhiraj-house/K_NEW.jpg",
        ],
      },

      {
        name: "Jadav Residence",
        slug: "jadav-residence",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/jadav-residence/IMG_8861.JPG",
        images: [
          "/images/projects/residential/jadav-residence/IMG_8861.JPG",
          "/images/projects/residential/jadav-residence/IMG_8862.JPG",
          "/images/projects/residential/jadav-residence/IMG_8863.JPG",
          "/images/projects/residential/jadav-residence/IMG_8864.JPG",
          "/images/projects/residential/jadav-residence/IMG_8865.JPG",
        ],
      },
      {
        name: "Kirit Joshi House",
        slug: "kirit-joshi-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/kirit-joshi-house/KJoshi-1.JPG",
        images: [
          "/images/projects/residential/kirit-joshi-house/KJoshi-1.JPG",
          "/images/projects/residential/kirit-joshi-house/KJoshi-2.JPG",
          "/images/projects/residential/kirit-joshi-house/KJoshi-3.JPG",
          "/images/projects/residential/kirit-joshi-house/KJoshi-4.JPG",
        ],
      },
      {
        name: "Malibu House",
        slug: "malibu-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/malibu-house/House%20IMG-20201029-WA0009.jpg",
        images: [
          "/images/projects/residential/malibu-house/House%20IMG-20201029-WA0009.jpg",
          "/images/projects/residential/malibu-house/House%20IMG-20201029-WA0010.jpg",
          "/images/projects/residential/malibu-house/House%20IMG-20201029-WA0011.jpg",
          "/images/projects/residential/malibu-house/House%20IMG-20201029-WA0012.jpg",
          "/images/projects/residential/malibu-house/House%20IMG-20201029-WA0013.jpg",
          "/images/projects/residential/malibu-house/House%20IMG-20201029-WA0014.jpg",
          "/images/projects/residential/malibu-house/House%20IMG-20201029-WA0015.jpg",
        ],
      },
      {
        name: "Max House",
        slug: "max-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/max-house/Bartlett%20FRONT-NORTH%2B%2BVIEW.png",
        images: [
          "/images/projects/residential/max-house/Bartlett%20FRONT-NORTH%2B%2BVIEW.png",
          "/images/projects/residential/max-house/Bartlett%20REAR-SOUTH%2BVIEW.png",
        ],
      },

      {
        name: "Olds House",
        slug: "olds-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/olds-house/Olds%202019.10.17%2B-%2BPERSPECTIVE%2BRENDERINGS%2BSW%2B2.jpg",
        images: [
          "/images/projects/residential/olds-house/Olds%202019.10.17%2B-%2BPERSPECTIVE%2BRENDERINGS%2BSW%2B2.jpg",
          "/images/projects/residential/olds-house/Olds%20Picture1.png",
          "/images/projects/residential/olds-house/Olds%20Picture2.png",
          "/images/projects/residential/olds-house/Olds%20Picture3.png",
          "/images/projects/residential/olds-house/Olds%20Picture4.png",
          "/images/projects/residential/olds-house/Olds%20REAR%2BVIEW%2B1-%2BDAY.png",
          "/images/projects/residential/olds-house/Olds%20REAR%2BVIEW%2B2-%2BDAY.png",
        ],
      },
      {
        name: "Panchal House",
        slug: "panchal-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/panchal-house/D_PANCHAL1.jpg",
        images: [
          "/images/projects/residential/panchal-house/D_PANCHAL1.jpg",
          "/images/projects/residential/panchal-house/D_PANCHAL2.jpg",
          "/images/projects/residential/panchal-house/D_PANCHAL3.jpg",
          "/images/projects/residential/panchal-house/D_PANCHAL4.jpg",
          "/images/projects/residential/panchal-house/D_PANCHAL5.jpg",
          "/images/projects/residential/panchal-house/D_PANCHAL6.jpg",
          "/images/projects/residential/panchal-house/D_PANCHAL7.jpg",
        ],
      },
      {
        name: "Patel House",
        slug: "patel-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/patel-house/RAMESH_PATEL1%20%281%29.jpg",
        images: [
          "/images/projects/residential/patel-house/RAMESH_PATEL1%20%281%29.jpg",
          "/images/projects/residential/patel-house/RAMESH_PATEL1%20%282%29.jpg",
          "/images/projects/residential/patel-house/RAMESH_PATEL1%20%283%29.jpg",
          "/images/projects/residential/patel-house/RAMESH_PATEL1.jpg",
        ],
      },
      {
        name: "Pittsburgh House",
        slug: "pittsburgh-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/pittsburgh-house/6568ec19dab6b355155dab9c_CH-6-4-scaled-p-800.jpeg",
        images: [
          "/images/projects/residential/pittsburgh-house/6568ec19dab6b355155dab9c_CH-6-4-scaled-p-800.jpeg",
          "/images/projects/residential/pittsburgh-house/6568ec3a265d4fd2204060ea_CH-6-3-1536x854.jpg",
          "/images/projects/residential/pittsburgh-house/6568ec40c32ecda9505f106d_CH-6-2-1536x854.jpg",
          "/images/projects/residential/pittsburgh-house/6568ec451075fe4b3626edae_CH-6-1-1536x854.jpg",
        ],
      },
      {
        name: "Pradip Gandhi House",
        slug: "pradip-gandhi-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/pradip-gandhi-house/1.jpg",
        images: [
          "/images/projects/residential/pradip-gandhi-house/1.jpg",
          "/images/projects/residential/pradip-gandhi-house/2.jpg",
          "/images/projects/residential/pradip-gandhi-house/3.jpg",
          "/images/projects/residential/pradip-gandhi-house/5.jpg",
          "/images/projects/residential/pradip-gandhi-house/6.jpg",
          "/images/projects/residential/pradip-gandhi-house/P1.jpg",
          "/images/projects/residential/pradip-gandhi-house/P2.jpg",
          "/images/projects/residential/pradip-gandhi-house/P4.jpg",
          "/images/projects/residential/pradip-gandhi-house/P5.jpg",
          "/images/projects/residential/pradip-gandhi-house/P6.jpg",
          "/images/projects/residential/pradip-gandhi-house/P7.jpg",
        ],
      },
      {
        name: "Prakash House",
        slug: "prakash-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/prakash-house/ENT.jpg",
        images: [
          "/images/projects/residential/prakash-house/ENT.jpg",
          "/images/projects/residential/prakash-house/FRONT.jpg",
          "/images/projects/residential/prakash-house/FRONT_NIGHT.jpg",
        ],
      },
      {
        name: "Sam House",
        slug: "sam-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/sam-house/Image8.png",
        images: [
          "/images/projects/residential/sam-house/Image8.png",
        ],
      },
      {
        name: "Shah House",
        slug: "shah-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/shah-house/118.jpg",
        images: [
          "/images/projects/residential/shah-house/118.jpg",
          "/images/projects/residential/shah-house/20.jpg",
          "/images/projects/residential/shah-house/21.jpg",
          "/images/projects/residential/shah-house/VGSHAH_P1.jpg",
          "/images/projects/residential/shah-house/VGSHAH_P2.jpg",
          "/images/projects/residential/shah-house/VGSHAH_P3.jpg",
        ],
      },
      {
        name: "Shyam House",
        slug: "shyam-house",
        categorySlug: "residential",
        thumbnail: "/images/projects/residential/shyam-house/BORODA-9.jpg",
        images: [
          "/images/projects/residential/shyam-house/BORODA-9.jpg",
          "/images/projects/residential/shyam-house/BORODA.jpg",
          "/images/projects/residential/shyam-house/PLAN%20AT%20BARODA-%206.jpg",
        ],
      },
    ],
  },
];

export function getAllProjects(): Project[] {
  return categories.flatMap((c) => c.projects);
}

export function getProjectBySlug(categorySlug: string, projectSlug: string): Project | undefined {
  const category = categories.find((c) => c.slug === categorySlug);
  return category?.projects.find((p) => p.slug === projectSlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
