import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from '../common/Loader'
import type { IExercisesData } from '../../../../interfaces/systems/fit'

interface ISimilarExercisesProps {
    targetMuscleExercises: IExercisesData[];
    equipmentExercises: IExercisesData[];
}

const SimilarExercises: React.FC<ISimilarExercisesProps> = ({targetMuscleExercises, equipmentExercises}) => {

    return (
        <Box sx={{ mt: {lg: '10px', xs: '0'}}}>
            <Typography variant='h3' mb={6} ml={4}>
                Mesmo grupo muscular
            </Typography>
            <Stack direction="row" sx={{p: '2', position: 'relative'}}>
                {targetMuscleExercises.length ? 
                    <HorizontalScrollBar data={targetMuscleExercises} /> :
                    <Loader />
                }
            </Stack>
            <Typography variant='h3' mb={6} mt={6} ml={4}>
                Mesmo equipamento
            </Typography>
            <Stack direction="row" sx={{p: '2', position: 'relative'}}>
                {equipmentExercises.length ?
                    <HorizontalScrollBar data={equipmentExercises} /> :
                    <Loader />
                }
            </Stack>
        </Box>
    )

}

export default SimilarExercises