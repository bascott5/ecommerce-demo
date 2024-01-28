"use server"
 import { redirect } from 'next/navigation';

const Navigate: React.FC<FormData> = async (data: FormData) => {
    redirect(`/search?q=${data.get('query')}`)
}

export default Navigate;