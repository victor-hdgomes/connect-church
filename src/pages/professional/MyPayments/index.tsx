import React, { useRef, useCallback } from "react";
import { StyleSheet, View } from 'react-native';
import { SearchInputComponent } from "@/components/inputs/searchInputComponent";
import PaymentListItem from "@/components/elements/paymentListItem";
import { ScrollView } from "react-native-gesture-handler";
import { Payment } from "@/components/modalize/payment";
import { Modalize } from 'react-native-modalize'

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function MyPayments() {
  const { t } = useTranslation();

  const paymentLateRef = useRef<Modalize | null>(null);

  const onOpenPaymentLateItem = useCallback(() => {
    paymentLateRef.current?.open()
  }, [paymentLateRef])

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <SearchInputComponent placeholder={t("professionalPages.myPayments.search.placeholder")} />
      </View>

      <ScrollView>
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"pending"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"late"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"confirmed"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"confirmed"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"confirmed"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"confirmed"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"confirmed"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"confirmed"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"confirmed"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"confirmed"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"confirmed"} />
        <PaymentListItem onLate={onOpenPaymentLateItem} title="Fatura janeiro" subtitle="Vence em 22/01" status={"confirmed"} />
      </ScrollView>

      <Payment modalizeRef={paymentLateRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
