// import Onboarding from '../components/Onboarding'
// import TermsAndConditions from '../components/TermsAndConditions'
// import SearchBox from '../components/SearchBox'

import OrderStatusSelector from '../components/OrderStatusSelector'

const PlaygroundPage = () => {
  // return <Onboarding />;
  // return <TermsAndConditions />
  // return <SearchBox onChange={(text) => console.log(text)} />

  return <OrderStatusSelector onChange={(status) => console.log(status)} />
}

export default PlaygroundPage
