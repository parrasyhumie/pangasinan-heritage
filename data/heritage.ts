export type HeritageSite = {
  slug: string
  name: string
  location: string
  category: string
  shortDescription: string
  accent: string
  icon: string
  image: string
  tags: string[]
}

export const heritageSites: HeritageSite[] = [
  {
    slug: 'sky-plaza',
    name: 'Sky Plaza',
    location: 'Natividad, Pangasinan',
    category: 'Viewpoint',
    shortDescription:
      'A highland stop for wide mountain views, cool air, and slow travel moments.',
    accent: 'sky',
    icon: 'mountain',
    image: '/pangasinan-heritage/images/sky-plaza.jpg',
    tags: ['nature', 'viewpoint', 'highland']
  },

  {
    slug: 'maranum-falls',
    name: 'Maranum Falls',
    location: 'Batchelor East, Natividad',
    category: 'Waterfall',
    shortDescription:
      'A refreshing forest destination highlighted for its water, rock formations, and greenery.',
    accent: 'water',
    icon: 'waterfall',
    image: '/pangasinan-heritage/images/maranum-falls.jpg',
    tags: ['nature', 'waterfall', 'eco-tourism']
  },

  {
    slug: 'malico-viewpoint-inn',
    name: 'Malico Viewpoint Inn',
    location: 'San Nicolas, Pangasinan',
    category: 'Heritage Stop',
    shortDescription:
      'A scenic mountain stop connecting visitors with highland stories and local hospitality.',
    accent: 'forest',
    icon: 'cabins',
    image: '/pangasinan-heritage/images/malico-viewpoint-inn.jpg',
    tags: ['heritage', 'mountain', 'community']
  },

  {
    slug: 'heritage-trails',
    name: 'Heritage Trails',
    location: 'Pangasinan Province',
    category: 'Culture',
    shortDescription:
      'A sample collection of routes linking local history, food traditions, craft, and landscapes.',
    accent: 'earth',
    icon: 'path',
    image: '/pangasinan-heritage/images/heritage-trails.jpg',
    tags: ['culture', 'history', 'local-life']
  },

  {
    slug: 'river-stories',
    name: 'River Stories',
    location: 'Pangasinan Province',
    category: 'Community',
    shortDescription:
      'Stories and places shaped by waterways, livelihoods, and generations of local knowledge.',
    accent: 'river',
    icon: 'river',
    image: '/pangasinan-heritage/images/river-stories.jpg',
    tags: ['community', 'stories', 'nature']
  },

  {
    slug: 'highland-cuisine',
    name: 'Highland Cuisine',
    location: 'Northern Pangasinan',
    category: 'Foodways',
    shortDescription:
      'A sample editorial guide to food traditions and ingredients rooted in upland communities.',
    accent: 'sun',
    icon: 'basket',
    image: '/pangasinan-heritage/images/highland-cuisine.jpg',
    tags: ['food', 'culture', 'community']
  }
]