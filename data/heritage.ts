export type HeritageSite = {
  slug: string
  name: string
  location: string
  category: string
  shortDescription: string
  description: string
  accent: string
  icon: string
  tags: string[]
  image: string
}

export const heritageSites: HeritageSite[] = [
  {
    slug: 'sky-plaza',
    name: 'Sky Plaza',
    location: 'Natividad, Pangasinan',
    category: 'Viewpoint',

    shortDescription:
      'A highland stop for wide mountain views, cool air, and slow travel moments.',

    description:
      'Sky Plaza is a scenic highland destination in Natividad, Pangasinan. Visitors can enjoy wide views of the surrounding mountains and countryside while experiencing the cooler atmosphere of the upland area. It is a relaxing stop for travelers interested in nature, photography, and peaceful outdoor experiences.',

    accent: 'sky',
    icon: 'mountain',
    tags: ['nature', 'viewpoint', 'highland'],
    image: '/images/sky-plaza.jpg'
  },

  {
    slug: 'maranum-falls',
    name: 'Maranum Falls',
    location: 'Batchelor East, Natividad',
    category: 'Waterfall',

    shortDescription:
      'A refreshing forest destination highlighted for its water, rock formations, and greenery.',

    description:
      'Maranum Falls is a refreshing natural destination in Batchelor East, Natividad. The area is surrounded by greenery, rocks, and flowing water, making it a peaceful place for visitors who want to experience the natural landscape of Pangasinan.',

    accent: 'water',
    icon: 'waterfall',
    tags: ['nature', 'waterfall', 'eco-tourism'],
    image: '/images/maranum-falls.jpg'
  },

  {
    slug: 'malico-viewpoint-inn',
    name: 'Malico Viewpoint Inn',
    location: 'San Nicolas, Pangasinan',
    category: 'Heritage Stop',

    shortDescription:
      'A scenic mountain stop connecting visitors with highland stories and local hospitality.',

    description:
      'Malico Viewpoint Inn is a scenic mountain destination in San Nicolas, Pangasinan. It provides visitors with an opportunity to experience the highland environment, appreciate mountain scenery, and learn more about the communities and stories connected to this part of the province.',

    accent: 'forest',
    icon: 'cabins',
    tags: ['heritage', 'mountain', 'community'],
    image: '/images/malico-viewpoint-inn.jpg'
  },

  {
    slug: 'heritage-trails',
    name: 'Heritage Trails',
    location: 'Pangasinan Province',
    category: 'Culture',

    shortDescription:
      'A sample collection of routes linking local history, food traditions, craft, and landscapes.',

    description:
      'Heritage Trails presents a collection of cultural experiences across Pangasinan. These trails connect visitors with local history, traditional food, crafts, landscapes, and community stories, providing a broader way to appreciate the province beyond individual tourist attractions.',

    accent: 'earth',
    icon: 'path',
    tags: ['culture', 'history', 'local-life'],
    image: '/images/heritage-trails.jpg'
  },

  {
    slug: 'river-stories',
    name: 'River Stories',
    location: 'Pangasinan Province',
    category: 'Community',

    shortDescription:
      'Stories and places shaped by waterways, livelihoods, and generations of local knowledge.',

    description:
      'River Stories explores the relationship between Pangasinan communities and their waterways. Rivers have supported livelihoods, transportation, food traditions, and local communities for generations. This discovery highlights the stories and experiences connected to these important natural resources.',

    accent: 'river',
    icon: 'river',
    tags: ['community', 'stories', 'nature'],
    image: '/images/river-stories.jpg'
  },

  {
    slug: 'highland-cuisine',
    name: 'Highland Cuisine',
    location: 'Northern Pangasinan',
    category: 'Foodways',

    shortDescription:
      'A sample editorial guide to food traditions and ingredients rooted in upland communities.',

    description:
      'Highland Cuisine highlights food traditions and ingredients associated with upland communities in northern Pangasinan. It introduces visitors to local food culture and the relationship between ingredients, community practices, and the highland environment.',

    accent: 'sun',
    icon: 'basket',
    tags: ['food', 'culture', 'community'],
    image: '/images/highland-cuisine.jpg'
  }
]