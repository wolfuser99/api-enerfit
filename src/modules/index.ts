import { Customer } from './customer/customer.entity';
import { Product } from './product/product.entity';
import { Provider } from './provider/provider.entity';
import { PurchaseOrder } from './purchaseOrder/purchaseOrder.entity';
import { PurchaseOrderDetail } from './purchaseOrder/purchaseOrderDetail/purchaseOrderDetail.entity';
import { ShippingGuide } from './shippingGuide/shippingGuide.entity';
import { ShippingGuideDetail } from './shippingGuide/shippingGuideDetail/shippingGuideDetail.entity';
import { ShoppingGuide } from './shoppingGuide/shoppingGuide.entity';
import { ShoppingGuideDetail } from './shoppingGuide/shoppingGuideDetail/shoppingGuideDetail.entity';
import { User } from './user/user.entity';

export const modelEntities = [
  PurchaseOrder,
  Customer,
  Product,
  Provider,
  PurchaseOrderDetail,
  ShippingGuide,
  ShippingGuideDetail,
  ShoppingGuide,
  ShoppingGuideDetail,
  User,
];
