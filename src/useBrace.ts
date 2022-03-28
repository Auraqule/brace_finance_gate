/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { PaymentProps } from './@types/index'
import useScript from './script'
import { callBracePop } from './actions/brace-actions'

export default function useBracePayment(options: PaymentProps) {
  const [scriptLoaded, scriptError] = useScript()
  const {
    publicKey,
    customerName,
    customerEmail,
    currency,
    businessLogo,
    reference,
    acceptPartialPayment,
    amount,
    onError,
    onSuccess,
    onClose
  } = options

  function initializePayment(): void {
    if (scriptError) {
      throw new Error('Unable to load Brace inline script')
    }

    if (scriptLoaded) {
      const BraceArgs = {
        publicKey,
        customerName,
        customerEmail,
        currency,
        businessLogo,
        reference,
        acceptPartialPayment,
        amount,
        onError,
        onSuccess,
        onClose
      }
      callBracePop(BraceArgs)
    }
  }

  useEffect(() => {
    if (scriptError) {
      throw new Error('Unable to load Brace inline script')
    }
  }, [scriptError])

  return initializePayment
}
