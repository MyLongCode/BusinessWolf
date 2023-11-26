import * as avatar_1 from './avatar-1.svg'
import * as avatar_2 from './avatar-2.svg'
import * as avatar_3 from './avatar-3.svg'
import * as avatar_4 from './avatar-4.svg'
import * as avatar_5 from './avatar-5.svg'
import * as avatar_6 from './avatar-6.svg'
import * as avatar_7 from './avatar-7.svg'
import * as avatar_8 from './avatar-8.svg'
import * as avatar_9 from './avatar-9.svg'
import * as avatar_10 from './avatar-10.svg'
import * as avatar_11 from './avatar-11.svg'
import * as avatar_12 from './avatar-12.svg'

const avatars = [
	avatar_1,
	avatar_2,
	avatar_3,
	avatar_4,
	avatar_5,
	avatar_6,
	avatar_7,
	avatar_8,
	avatar_9,
	avatar_10,
	avatar_11,
	avatar_12
]

export default avatars.map(avatar => avatar.default) as string[]
