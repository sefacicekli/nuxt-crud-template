import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
    "https://yiawkwultwutcmhoqjrd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDczNjQ5OSwiZXhwIjoxOTM2MzEyNDk5fQ.0xN6nlps7cHy-3F4hnf7p07hT5WqIQHFmYg9hkyn04g"
)
export default (_, inject) => {
    inject('supabase', supabase)
}