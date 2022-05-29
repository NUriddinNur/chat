import dotenf from 'dotenv'
import path from 'path'

dotenf.config({ path: path.join(process.cwd(), '.env')})

process.env.PORT = process.env.PORT || 4006