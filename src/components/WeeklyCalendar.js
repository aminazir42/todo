
import React, { useState } from 'react';
import { Box, SimpleGrid, Text, useColorModeValue, Flex } from '@chakra-ui/react';
import { format, addDays, startOfWeek, isToday } from 'date-fns';

const WeeklyCalendar = ({ onSelectDay }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const daysOfWeek = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));
  const todayBg = useColorModeValue('teal.100', 'teal.700');
  const todayColor = useColorModeValue('teal.800', 'teal.200');
  const selectedBg = useColorModeValue('teal.200', 'teal.800');

  const handleDayClick = (day) => {
    setSelectedDay(day);
    onSelectDay(day);
  };

  return (
    <Box mt={4} p={4} bg="white" shadow="md" borderRadius="md">
      <SimpleGrid columns={7} spacing={4}>
        {daysOfWeek.map((day, index) => (
          <Flex
            key={index}
            p={4}
            borderRadius="md"
            bg={isToday(day) ? todayBg : selectedDay === day ? selectedBg : 'gray.100'}
            color={isToday(day) ? todayColor : selectedDay === day ? todayColor : 'black'}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            boxShadow={isToday(day) ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none'}
            cursor="pointer"
            onClick={() => handleDayClick(day)}
          >
            <Text fontSize="lg" fontWeight={isToday(day) ? 'bold' : 'normal'}>
              {format(day, 'EEEE')}
            </Text>
            <Text fontSize="sm">{format(day, 'dd/MM/yyyy')}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WeeklyCalendar;
