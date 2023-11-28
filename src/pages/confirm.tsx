import React from 'react'
import Layout from 'components/app/layout'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import {useRouter} from 'next/router'

const ConfirmSubscriptionPage = () => {
  const router = useRouter()
  const email = router.query.email

  return (
    <Layout
      meta={{title: 'Confirm your subscription'}}
      withFooter={false}
      className="bg-brand-primary-light font-heading text-black"
      navigationProps={{
        className: 'bg-transparent w-full max-w-none pt-10 absolute',
      }}
    >
      <main className="flex flex-grow flex-col items-center justify-center px-5 pb-16 pt-32">
        <div className="max-w-screen-sm text-center font-light">
          <Illustration email={email} />
          {email && (
            <p className="font-medium sm:text-xl" role="status">
              Confirmation email sent to <strong>{email}</strong>.
            </p>
          )}
          <h1 className="py-8 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <Balancer>
              Please check your inbox for an email that just got sent.
            </Balancer>
          </h1>

          <p className="mx-auto pb-8 font-medium leading-relaxed sm:text-xl">
            <Balancer>
              You'll need to click the confirmation link to receive any further
              emails. If you don't see the email after a few minutes, you might
              check your spam folder or other filters and add{' '}
              <strong>{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</strong> to your
              contacts.
            </Balancer>
          </p>
          <p className="flex flex-col items-center justify-center font-medium sm:text-lg">
            <span>Thanks,</span>
            <Signature />
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default ConfirmSubscriptionPage

export const Signature = () => {
  return (
    <>
      <Image
        src={require('../../public/assets/signature.svg')}
        width={163 / 1.75}
        height={152 / 1.75}
        alt="Jason's fake signature"
        className="-ml-5 mt-8"
      />
    </>
  )
}

const Illustration: React.FC<{email?: string | undefined | string[]}> = ({
  email,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="168"
      height="90"
      fill="none"
      viewBox="0 0 168 90"
      className="mx-auto mb-8"
    >
      <path
        fill="#00934E"
        d="M1.076 22.074A2 2 0 0 1 3.075 20H150a2 2 0 0 1 2 2v59.548c0 3.767-2.997 6.86-6.762 6.992-56.12 1.97-79.726 1.927-135.204-.01a7.006 7.006 0 0 1-6.757-6.735l-2.2-59.721Z"
      />
      <path
        fill="#F5D000"
        stroke="#000"
        strokeWidth="3"
        d="M1.805 20.992a5 5 0 0 1 5-5h140a5 5 0 0 1 5 5v58a5 5 0 0 1-5 5h-140a5 5 0 0 1-5-5v-58Z"
      />
      <path
        fill="#DDBC00"
        d="M74.421 52.781 4.834 19.896c-.965-.456-.64-1.904.427-1.904h142.634c1.065 0 1.392 1.443.432 1.902L79.573 52.77a6 6 0 0 1-5.152.011Z"
      />
      <path
        fill="#F5D000"
        stroke="#000"
        strokeWidth="3"
        d="M74.995 47.632 5.774 17.912c-.999-.43-.693-1.92.395-1.92h139.413c1.081 0 1.393 1.476.405 1.914L78.995 47.608a5 5 0 0 1-4 .024Z"
      />
      <path
        fill="#EB5228"
        stroke="#000"
        strokeWidth="3"
        d="m145.805 3 5.291 6.727 8.497-1.016-1.015 8.498 6.727 5.291-6.727 5.29 1.015 8.499-8.497-1.016L145.805 42l-5.291-6.727-8.498 1.016 1.016-8.498-6.727-5.291 6.727-5.29-1.016-8.499 8.498 1.016L145.805 3Z"
      />
      <path
        fill="#000"
        d="M146.633 29.47c-.686 0-1.166-.137-1.44-.411-.275-.274-.412-.761-.412-1.46V16.88c0-.686.137-1.166.412-1.44.274-.275.761-.412 1.46-.412.686 0 1.166.144 1.44.432.275.275.412.761.412 1.46v10.7c0 .686-.137 1.166-.412 1.44-.274.274-.761.411-1.46.411Zm-2.057-8.64c-.467.412-.892.61-1.276.597-.37-.014-.775-.254-1.214-.72-.452-.48-.665-.933-.637-1.358.027-.425.315-.877.864-1.357l2.612-2.346c.453-.411.871-.596 1.255-.555.398.027.809.274 1.234.74.439.467.638.913.597 1.338-.027.411-.315.864-.864 1.357l-2.571 2.304Z"
      />
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth="3"
        d="M10 60a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V60Z"
      />
      <text
        className="font-rounded"
        fill="#000"
        x={75}
        y={70}
        textAnchor="middle"
        fontWeight={600}
        fontSize={9}
      >
        {email ? `To: ${email}` : 'Confirm'}
      </text>
    </svg>
  )
}
