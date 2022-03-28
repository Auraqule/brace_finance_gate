export const callBracePop = (BraceArgs: any): void => {
  // @ts-ignore
  return (
    // @ts-ignore
    window.BraceCheckout &&
    // @ts-ignore
    window.BraceCheckout({
      name: BraceArgs.customerName,
      email: BraceArgs.customerEmail,
      amount: BraceArgs.amount,
      key: BraceArgs.publicKey,
      logo: BraceArgs.businessLogo || '',
      currency: BraceArgs.currency || '',
      reference: BraceArgs.reference || '',
      acceptPartialPayment: BraceArgs.acceptPartialPayment,
      onClose: BraceArgs.onClose,
      onSuccess: BraceArgs.onSuccess,
      onError: BraceArgs.onError
    })
  )
}
