import { Client } from '@paymentsds/mpesa'
import dotenv from 'dotenv'

dotenv.config()

const API_KEY = process.env.API_KEY
const PUBLIC_KEY = process.env.PUBLIC_KEY
const USER_AGENT = process.env.USER_AGENT
const ORIGIN = process.env.ORIGIN
const HOST = process.env.HOST
const SERVICE_PROVIDER_CODE = process.env.SERVICE_PROVIDER_CODE

const client = new Client({
  apiKey: API_KEY,
  publicKey: PUBLIC_KEY,
  userAgent: USER_AGENT,
  origin: ORIGIN,
  host: HOST,
  serviceProviderCode: SERVICE_PROVIDER_CODE,
  verifySSL: false,
  debugging: true,
  environment: 'sandbox'
})

client
  .receive({
    from: '841234567',
    transaction: '123456789',
    reference: '123456789',
    amount: '100'
  })
  .then((r) => {
    console.log(r)
  })
  .catch((e) => {
    console.log(e)
  })
