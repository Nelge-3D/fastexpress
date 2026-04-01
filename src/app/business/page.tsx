import Business from './Business'
import Parteners from '@/components/Parteners'

export const metadata = {
  title: 'Fast Express Business - Solutions logistiques pour entreprises',
  description: 'Découvrez nos services logistiques pour entreprises : stockage, préparation de commandes, livraison express, services administratifs et restauration.',
}

export default function BusinessPage() {
  return (
    <div>
      <Business />
      <Parteners/>
    </div>
  )
}