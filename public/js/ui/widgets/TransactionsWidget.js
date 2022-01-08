/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (!element) {
      throw new Error('element must be DOM element');
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const newIncome = this.element.querySelector('.create-income-button');
    const newExpense = this.element.querySelector('.create-expense-button');

    newIncome.addEventListener('click', (evt) => {
      App.getModal('newIncome').open();
    });

    newExpense.addEventListener('click', (evt) => {
      App.getModal('newExpense').open();
    });
  }
}
