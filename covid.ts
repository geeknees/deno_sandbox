import { Wrapper } from 'https://deno.land/x/novelcovid_wrapper/mod.ts'

const wrapper = new Wrapper()

wrapper.country('jp').then(data => console.log(data))
