import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import AddRemoveOrderButton from './AddRemoveOrderButton.js'


export default function FoodItemCard({ category }) {
    return (
        <Box key={category.category} sx={{ m: 2 }}>
            <Typography component="h1" variant="h4">
                {category.category}
            </Typography>
            <Divider variant="middle" sx={{ mb: 1 }} />
            {category.foodItems.map((item) => (
                <Card sx={{ display: 'flex', mb: 2 }} key={item.name}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={item.img}
                        alt={item.name}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h6">
                                {item.name}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                            >
                                Rs.{item.price}
                            </Typography>
                        </CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                pl: 1,
                                pb: 1
                            }}
                        >
                            <AddRemoveOrderButton item={item} />
                        </Box>
                    </Box>
                </Card>
            ))}
        </Box>
    )
}