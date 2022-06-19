import React from "react";

const TransporttationTab = () => {
  return (
    <>
      <table className="table Notice-table table-bordered">
        <tbody>
          <tr>
            <td className="title-col col-3">Shipping information</td>
            <td className="transportation-infoCol col-9">
              <div>
                <div>
                  - When ordering multiple products, products that can be
                  shipped immediately will be shipped sequentially.
                </div>
                <div>
                  - Exchanges and refunds after purchase must be made within 15
                  days of receipt.
                </div>
                <div>
                  - Delivery schedule may change depending on the order status,
                  and you can check it through 1:1 inquiry or customer center
                  from the next day after ordering.
                </div>
                <div>
                  - For some products, it may take up to 7-10 business days due
                  to stock availability or custom production. The average
                  delivery date for each product is as follows:
                </div>
              </div>
              <div className="shipping-time-table">
                <table className="table Notice-table table-bordered">
                  <tbody>
                    <tr>
                      <td className="title-col col-6">clothes</td>
                      <td className="notice-info">2-3 days</td>
                    </tr>
                    <tr>
                      <td className="title-col">Shoes</td>
                      <td className="notice-info">2-3 days</td>
                    </tr>
                    <tr>
                      <td className="title-col">jewelry</td>
                      <td className="notice-info">5 days</td>
                    </tr>
                    <tr>
                      <td className="title-col">Handbag / Romanson</td>
                      <td className="notice-info">4 days</td>
                    </tr>
                    <tr>
                      <td className="title-col">Cosmetic</td>
                      <td className="notice-info">2-3 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div>
                  * Delivery date is based on business days and may be delayed
                  depending on stock availability and local courier
                  circumstances.
                </div>
                <div>
                  * Products purchased from the MeoStore online shopping mall
                  cannot be picked up at the store.
                </div>
                <div>
                  * An additional delivery fee of 30000VNĐ won will be charged
                  for Jeju/island/island areas.
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="title-col col-3">
              Cancellation / Exchange / Refund Return Information
            </td>
            <td className="transportation-infoCol col-9">
              <div>
                <div>
                  - Order cancellation immediately after payment is completed
                  can be processed directly at "My Page&gt; Order Cancellation,
                  Exchange, Return History".
                </div>
                <div>
                  - If the status of the order is in preparation for the
                  product, it may not be processed directly because it may have
                  already been shipped or packaged, so please inquire through
                  the customer center.
                </div>
                <div>
                  - 100% exchange/refund will be given if the product is
                  defective. (Shipping cost is borne by the head office)
                </div>
                <div>
                  - In case of customer change of mind, shipping cost is borne
                  by the customer.
                </div>
                <div>
                  - Specially made products cannot be returned. (18k production,
                  specification and size change)
                </div>
                <div>
                  - Products with signs of use cannot be exchanged or returned.
                </div>
                <div>
                  - Exchanges for products ordered online or for other products
                  are not allowed.
                </div>
              </div>
              <div className="transportation-Warming">
                <div>
                  * Jewelery: wear marks, scratches, etc. / Handbag: scratches,
                  plated protective film, etc.
                </div>
                <div>
                  * Beauty: In case the product packaging is damaged, used or
                  lost, the product is damaged or damaged due to the customer's
                  negligence, or the virgin seal (sealing sticker) is opened
                </div>
                <div>
                  * Perfume: If the protective wrapping paper (outer plastic
                  packaging) is damaged
                </div>
              </div>
              <div>
                <div>
                  - Exchanges and refunds will be processed after the returned
                  product has arrived, and exchanges or exchanges for other
                  products are not allowed.
                </div>
                <div>
                  - Credit card orders will be canceled 3-5 business days after
                  the cancellation is completed. (※ In case of check card, it
                  takes up to 10 days)
                </div>
                <div>
                  - As each credit card company has a different cancellation
                  processing period, please contact the credit card company for
                  details.
                </div>
                <div>
                  - For inquiries about other
                  products/exchanges/shipping/refunds, please use the customer
                  center.
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TransporttationTab;
