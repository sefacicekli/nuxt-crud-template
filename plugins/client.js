import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
    "yourProjectUrl",
    "ApiKey"
)
export default (_, inject) => {
    inject('supabase', supabase)
}
