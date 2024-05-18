import React from 'react';
import { Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import { format, addDays, startOfWeek, isToday } from 'date-fns';

const WeeklyCalendar = () => {
  const startDate = startOfWeek(new Date());
  const daysOfWeek = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));
  const todayBg = useColorModeValue('teal.100', 'teal.700');

  return (
    <Box mt={4} p={4} bg="white" shadow="md" borderRadius="md">
      <SimpleGrid columns={7} spacing={4}>
        {daysOfWeek.map((day, index) => (
          <Box
            key={index}
            p={2}
            borderRadius="md"
            bg={isToday(day) ? todayBg : 'gray.100'}
            textAlign="center"
          >
            <Text fontSize="lg" fontWeight={isToday(day) ? 'bold' : 'normal'}>
              {format(day, 'EEEE')}
            </Text>
            <Text fontSize="sm">{format(day, 'dd/MM/yyyy')}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WeeklyCalendar;
