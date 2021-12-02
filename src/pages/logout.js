import { useRouter } from 'next/router'

export default function Logout() {
    const router = useRouter()
    window.localStorage.removeItem('user')
    router.push('/')

  return (
    null
  );
}
