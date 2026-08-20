import Razorpay from "razorpay";

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: 1900, // ₹19
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return Response.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Razorpay Error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to create order",
      },
      {
        status: 500,
      }
    );
  }
}
