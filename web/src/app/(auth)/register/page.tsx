import SendButton from '@/components/SendButton';
import { XClose } from '@/components/XClose';
import Link from 'next/link';

export default async function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-8 md:py-8 bg-zinc-800">
      <div className="flex flex-col items-center">
        {/* LOGIN FORMS CONTAINER */}
        <div className="flex flex-col rounded-md bg-zinc-600 px-4 py-6 w-90vw sm:w-50vw lg:w-30rem justify-center mb-2">
          <div className="flex flex-col items-center">
            <h1 className="font-medium text-2xl text-slate-100 mb-6 align-baseline">
              Sign up
            </h1>
          </div>
          {/* Username Input */}
          <div className="flex flex-col">
            <h2 className="text-zinc-200 font-semibold text-sm mb-2">
              USERNAME
            </h2>
            <input className="font-normal px-2 py-3 text-base text-slate-100 rounded-md bg-zinc-700 inline-block max-w-full focus:outline-none focus:ring-0" />
            <div className="flex h-6 items-center justify-end">
              <p className="text-xs text-red-400 font-medium">
                Campo obrigatório
              </p>
            </div>
          </div>
          {/* Email Input */}
          <div className="flex flex-col">
            <h2 className="text-zinc-200 font-semibold text-sm mb-2">EMAIL</h2>
            <input className="font-normal px-2 py-3 text-base text-slate-100 rounded-md bg-zinc-700 inline-block max-w-full focus:outline-none focus:ring-0" />
            <div className="flex h-6 items-center justify-end">
              <p className="text-xs text-red-400 font-medium"></p>
            </div>
          </div>
          {/* Password Input */}
          <div className="flex flex-col">
            <h2 className="text-zinc-200 font-semibold text-sm mb-2">
              PASSWORD
            </h2>
            <input className="font-normal px-2 py-3 text-base text-slate-100 rounded-md bg-zinc-700 inline-block max-w-full focus:outline-none focus:ring-0" />
            <div className="flex h-6 items-center justify-end">
              <p className="text-xs text-red-400 font-medium">
                Campo obrigatório
              </p>
            </div>
          </div>
          {/* Confirm Password Input */}
          <div className="flex flex-col">
            <h2 className="text-zinc-200 font-semibold text-sm mb-2">
              CONFIRM PASSWORD
            </h2>
            <input className="font-normal px-2 py-3 text-base text-slate-100 rounded-md bg-zinc-700 inline-block max-w-full focus:outline-none focus:ring-0" />
            <div className="flex h-6 items-center justify-end">
              <p className="text-xs text-red-400 font-medium">
                Campo obrigatório
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-2">
            <div className="inline-flex flex-row">
              <p className="font-normal text-sm text-slate-100">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-normal text-sm text-orange-500 hover:underline focus:underline"
                >
                  Login
                </Link>
              </p>
            </div>
            <SendButton />
          </div>
        </div>
        <Link href="/">
          <XClose />
        </Link>
      </div>
    </main>
  );
}
