import axios from "axios";
import React, { useEffect, useState } from "react";
import { Advice } from "../../types/types";

const useAdviceHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [advice, setAdvice] = useState<Advice>({
    advice: null,
    id: null,
  });

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    setLoading(true);
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        if (response.status === 200) {
          setAdvice(response.data.slip);
        }
      })
      .catch((error) => {
        console.log("Some error occurred!", error);
        setAdvice({
          advice: null,
          id: null,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    advice,
    fetchAdvice,
    loading,
  };
};

export default useAdviceHook;
