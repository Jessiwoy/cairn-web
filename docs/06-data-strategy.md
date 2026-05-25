# Dados e Mock Data

## Fase 1

Usar mock data local para acelerar frontend, UX e componentizacao.

## Principio

Mocks devem parecer dados reais de ecommerce e antecipar a modelagem backend.

## Entidades Iniciais

- Product
- Category
- Collection
- ProductVariant
- Cart
- CartItem
- User
- Address
- Wishlist
- WishlistItem
- Order
- OrderItem
- Review

## Campos Relevantes de Product

- id
- slug
- title
- name
- brand
- category
- categoryId
- subcategory
- price
- compareAtPrice
- description
- technicalDetails
- materials
- care
- rating
- reviewCount
- images
- variants
- tags
- stockStatus
- featured
- hasVariants

## Campos Iniciais por Entidade Backend

### User

- id
- name
- email
- password
- role
- createdAt
- updatedAt

### ProductVariant

- id
- productId
- size
- color
- stock
- sku
- createdAt
- updatedAt

### Category

- id
- name
- slug

### Cart

- id
- userId

### CartItem

- id
- cartId
- productId
- variantId
- quantity

### Wishlist

- id
- userId

### WishlistItem

- id
- wishlistId
- productId

### Order

- id
- userId
- total
- status
- createdAt
- updatedAt

### OrderItem

- id
- orderId
- productId
- variantId
- quantity
- price

## Categorias Iniciais

- Hiking
- Camping
- Trekking
- Bushcraft
- Apparel
- Footwear
- Packs
- Gear
- Accessories

## Regras

- Dados devem ter nomes plausiveis.
- Evitar lorem ipsum em areas importantes.
- Precos devem parecer realistas para marca premium.
- Produtos devem ter atributos que ajudem filtros reais.
- Slugs e IDs devem ser estaveis.

## Assets e Upload

- Inicialmente: assets locais.
- Futuramente: Cloudinary.

## Checkout e Pagamento

- Inicialmente: mock checkout.
- Futuramente: Stripe sandbox.
