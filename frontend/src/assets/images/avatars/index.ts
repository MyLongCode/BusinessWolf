import * as avatar_1 from './avatar-1.png'
import * as avatar_2 from './avatar-2.png'
import * as avatar_3 from './avatar-3.png'
import * as avatar_4 from './avatar-4.png'
import * as avatar_5 from './avatar-5.png'
import * as avatar_6 from './avatar-6.png'
import * as avatar_7 from './avatar-7.png'

const avatars = [avatar_1, avatar_2, avatar_3, avatar_4, avatar_5, avatar_6, avatar_7]

export default avatars.map(avatar => avatar.default) as string[]
