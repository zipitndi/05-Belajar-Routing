type Props = {
    params: {
          reviewsId: string
    }
  }
  
  export default function ReviewsDetails({ params }: Props) {
    return (
          <h1>Details about reviews {params.reviewsId}</h1>
    )
  }